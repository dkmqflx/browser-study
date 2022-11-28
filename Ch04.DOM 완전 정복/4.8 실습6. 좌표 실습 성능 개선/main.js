const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHight = targetRect.height / 2;

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(`x ${x} y:${y}`);

  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;

  target.style.transform = `translate(${x - targetHalfWidth}px, ${
    y - targetHalfHight
  }px)`;

  tag.style.transform = `translate(${x}px, ${y}px)`;

  tag.innerHTML = `${x}px ${y}px`;

  // vertical.style.left = `${x}px`;
  // horizontal.style.top = `${y}px`;

  // target.style.left = `${x}px`;
  // target.style.top = `${y}px`;

  // tag.style.left = `${x}px`;
  // tag.style.top = `${y}px`;
  // tag.innerHTML = `${x}px ${y}px`;

  // 마우스가 움직여서 이벤트가 발생할 때 마다 left, top이 바뀌기 때문에
  // layout 단계 부터 시작 된다
  // 따라서 translate을 사용해서 composition만 일어나도록 한다

  /**
   * 에러나는 경우 있는데 targetRect을 콘솔에 출력해보면
   *  width, height가 0이 되서 그런 것이다 
   * defer 옵션을 써도 그런데 그 이유는 이미지가 다운받아져 있지 않기 때문
    only document(defer) - document만, 즉 html만 완료되면 호출된다
    window.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded');
    });

    after resources - 페이지 안에서 사용되고 있는 모든 리소스(폰트, 이미지 ,css 등)가 다운로드가 완료되면 그 때 실행된다
    window.addEventListener('load', () => {
      console.log('load');
    });

    따라서 아래 콜백함수 안에 
    const targetRect = target.getBoundingClientRect();
    부터 시작하는 코든 코드를 넣어준다

    addEventListener('load'() => {


    })

   */
});
