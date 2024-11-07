// タグの取得
// buttonタグ
const btn = document.getElementById('btn');
// h1タグ
const text = document.getElementById('text');

//表示の更新
btn.addEventListener('click', () => {
    text.innerText = 'ボタンをクリックしました';
});