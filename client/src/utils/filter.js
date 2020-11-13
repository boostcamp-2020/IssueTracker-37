const wordRegExp = /[^ ]*:(".*?"|[^ ]*)|[^ ]*/g;
const optionRegExp = /(author|milestone|asignee|is|sort):(".*?"|[^ ]*)/g;

const assigneesChecker = (assignees, value) => {
  if (!assignees) return false;
  const regValue = value.replaceAll('"', '');

  return assignees.some((assignee) => assignee.User.name === regValue);
};

const labelsChecker = (labels, value) => {
  const regValue = value.replaceAll('"', '');

  return labels.some((label) => label.title === regValue);
};

const milestoneChecker = (issue, value) => {
  const regValue = value.replaceAll('"', '');

  if (!issue.Milestone) return false;
  if (issue.Milestone.title !== regValue) return false;
  return true;
};

const isChecker = (state, value) => {
  if (state && value === 'open') return true;
  else if (!state && value === 'closed') return true;
  return false;
};

const sortComparator = {
  'created-desc': (a, b) => b.createdAt.localeCompare(a.createdAt),
  'created-asc': (a, b) => a.createdAt.localeCompare(b.createdAt),
  'comments-desc': (a, b) => b.Comments.length - a.Comments.length,
  'comments-asc': (a, b) => a.Comments.length - b.Comments.length,
  'updated-desc': (a, b) => b.updatedAt.localeCompare(a.updatedAt),
  'updated-asc': (a, b) => a.updatedAt.localeCompare(b.updatedAt),
};

export const parser = (inputString) => {
  const words = inputString.match(wordRegExp).filter((word) => word.length);

  const options = {};

  const titles = [];

  words.forEach((word) => {
    if (optionRegExp.test(word)) {
      const [optionName, optionValue] = word.split(':');

      options[optionName] = optionValue;
    } else {
      titles.push(word);
    }
  });

  return { titles, options };
};

export const filter = (issues, filterOptions) => {
  const filterdIssues = issues.filter((issue) => {
    for (const [key, value] of Object.entries(filterOptions.options)) {
      switch (key) {
        case 'is':
          if (!isChecker(issue.state, value)) return false;
          break;
        case 'author':
          if (issue.User.name !== value) return false;
          break;
        case 'label':
          if (!labelsChecker(issue.Labels, value)) return false;
          break;
        case 'assignee':
          if (!assigneesChecker(issue.Assignees, value)) return false;
          break;
        case 'milestone':
          if (!milestoneChecker(issue, value)) return false;
          break;
        default:
          break;
      }
    }

    if (!filterOptions.titles.every((title) => issue.title.includes(title))) {
      return false;
    }

    return true;
  });

  const sortOption = filterOptions.options.sort || 'created-desc';

  return filterdIssues.sort(sortComparator[sortOption]);
};
