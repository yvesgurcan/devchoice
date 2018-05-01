export default string => (string || '').toLowerCase().replace(/[,;.?!:@#'"\\/%&*()-+$]/g, '').replace(/ /g, '-');
