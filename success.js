document.addEventListener("DOMContentLoaded", () => {
    const confettiContainer = document.querySelector(".confetti-container");
    const colors = [
        "#ff4c4c", // 赤
        "#4c8aff", // 青
        "#4cff4c", // 緑
        "#ffff66", // 黄色
        "#ff99cc", // ピンク
        "#cc99ff", // 紫
        "#ffa500", // オレンジ
        "#66ccff"  // 水色
      ];
  
    function createConfettiPiece() {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
      // ランダムな位置・サイズ・アニメーション
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = 2 + Math.random() * 4.5 + "s";
      confetti.style.width = 5 + Math.random() *10 + "px";
      confetti.style.height = 5 + Math.random() * 10 + "px";
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

      confetti.style.animationName = "fall";
        confetti.style.animationTimingFunction = "ease-in-out";
    //confetti.style.animationDelay = Math.random() * 2 + "s"; // 発生タイミングずらす

  
      confettiContainer.appendChild(confetti);
  
      // 一定時間後に削除
      setTimeout(() => {
        confetti.remove();
      }, 7000);
    }
  
    // 紙吹雪を連続して発生させる
    setInterval(() => {
        for (let i = 0; i < 3; i++) {
          createConfettiPiece();
        }
      }, 100); 
  });
  
