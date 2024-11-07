// タグの取得
// h2
const text = document.getElementById('text');
// ボタン
const btn = document.getElementById('btn');

// ボタンクリック時の処理
btn.addEventListener('click', () => {
    setTimeout(() => {
        text.innerText = 'ボタンをクリックしました';
    }, 2000);
});