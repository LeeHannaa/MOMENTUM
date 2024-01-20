// round : 반내림, 반올림
// ceil : 올림
// floor : 내림

const quotes = [
  {
    quote: "一生幸せでいたいなら正直でいること。",
    author: "- ブリブリ王国の宝 - ",
  },
  {
    quote:
      "本当の宝物っていうのはさ、人生をかけて夢中になれるんだよ。 好きなものね。",
    author: "- 新婚旅行ハリケーン「消えた父」 -",
  },
  {
    quote:
      "強い人は弱い人を助けることだと言ったじゃないですか。でも、お互いがお互いを助け合えばもっといいと思って。",
    author: "- 伝説を呼ぶブリブリ3分大進撃 (2005) -",
  },
  {
    quote: "夢は逃げない。 逃げるのはいつも私自身だ。",
    author: "- 近藤貴美 -",
  },
  {
    quote: "できると考えるから可能なのだ。",
    author: "- ベルギリウス -",
  },
  {
    quote:
      "見えないところでも友達のいいところを言える人こそ本当に信頼できる人だよ。",
    author: "- イギリスの神学者フラー -",
  },
  {
    quote:
      "夢は可能な限り実現させるために陰で努力を続ける限り、誰も傷つけることはない。",
    author: "- フランク·ウールワース -",
  },
  {
    quote:
      "弱い者ほど相手を許すことはできない。 許すということは強いという証拠だ。",
    author: "- マハトマ·ガンディー -",
  },
  {
    quote:
      "争っても怒っても一緒にいた方がいいから。 そして私は大人になりたいから。",
    author: "- 大人帝国の逆襲 (2001) -",
  },
  {
    quote: "君の未来は君だけのものだ。 君の望み通りに生きろ。",
    author: "- クレヨンしんちゃん -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * 10)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
