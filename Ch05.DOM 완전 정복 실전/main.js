const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;

  if (text === '') {
    input.focus();

    return;
  }

  // 2. 새로운 아이템을 만든다 (텍스트 + 삭제 버튼)
  const item = createItem(text);

  // 3. items라는 컨테이너 안에 새로 만든 아이템을 추가한다
  items.appendChild(item);

  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: 'center' });

  // 5. 인풋을 초기화 한다
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = `
  <i class="fa-solid fa-trash-can"></i>
  `;
  // i 태그는 값 변경될일 없기 때문에

  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

addBtn.addEventListener('click', onAdd);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    onAdd();
  }
});

// 개발자도구 - Sources
// 브레이크 포인트 설정 가능

// Watch에서 원하는 값을 검사할 수 있다
