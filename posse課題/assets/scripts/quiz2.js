// アロー関数
const judge = (q_id, select_id, a_id) => {
    const delight = document.querySelectorAll(`.list-${q_id}`)
    delight.forEach(function(value){
        value.style.pointerEvents = "none"
    })
    const answer_pass = document.getElementById(`list_${q_id}_${select_id}`)
    if (select_id === a_id){
        // 正解の時の処理
        answer_pass.classList.add("pass")
    }else{
        answer_pass.classList.add("failed")
    }
// ===は完全一致
}
// 光らないやり方
// 要素.style.pointerEvents = "none"



function createQuestion(question_id, select_array, question, answer_id){
    let quiz =`<span class="q-box-title">Q${question_id}</span>`
    +`<h3>${question}</h3>`
    +`<img class="hero-picture" src="/assets/img/quiz/img-quiz0${question_id}.png">`
    +`<span class="q-box-answer">A</span>`
    +`<ul class="answer-list">`;
    select_array.forEach(function(value,index){
    quiz+=`<li id="list_${question_id}_${index}" class="answer-list-item list-${question_id}" onclick="judge(${question_id},${index},${answer_id})">${value}</li>`;
    })
    const main = document.getElementById("main");
    main.insertAdjacentHTML("beforeend",quiz);
}
// createQuestion(1,2,3,4);
function createHtml(){
    createQuestion(1,["約28万人","約79万人","約183万人"],"日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",0)
    createQuestion(2,["INTECH","BIZZTECH","X-TECH"],"既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",1)
    createQuestion(3,["Internet of Things","Integrate into Technology","Information on Tool"],"IoTとは何の略でしょう",2)
    createQuestion(4,["Society5.0","CyPhy","SDGs"],"日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか",0)
    createQuestion(5,["web3.0","NFT","メタバース"],"イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんというでしょう？",1)
    createQuestion(6,["約2倍","約5倍","約11倍"],"先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",2)
}
createHtml();

// 正解を押したときに青くする













