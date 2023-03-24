const List = document.getElementById('lisTab');
const AddNew = document.getElementById('addTab');
const contactTab = document.getElementById('cTab');

const goList = () => {
  List.style.display = 'block';
  AddNew.style.display = 'none';
  contactTab.style.display = 'none';
};
const goAdd = () => {
  List.style.display = 'none';
  AddNew.style.display = 'block';
  contactTab.style.display = 'none';
};
const goContact = () => {
  List.style.display = 'none';
  AddNew.style.display = 'none';
  contactTab.style.display = 'flex';
};
export { goList, goAdd, goContact };