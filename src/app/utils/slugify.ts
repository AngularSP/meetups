export const slugfy = (str) => {
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();

  let from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  let to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return str;
}
