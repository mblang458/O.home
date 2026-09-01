<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>인라인 아코디언 게시판</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 40px 20px;
    }
    .inline-board {
      max-width: 800px;
      margin: 0 auto;
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    .inline-board h2 {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 24px;
      color: #333;
    }
    .post-item {
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      margin-bottom: 12px;
      overflow: hidden;
      background-color: #fff;
    }
    .post-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background-color: #f6f8fa;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    .post-header:hover {
      background-color: #eaeef2;
    }
    .post-title {
      font-weight: 600;
      color: #24292e;
    }
    .post-date {
      font-size: 13px;
      color: #586069;
    }
    .post-body {
      display: none;
      padding: 20px;
      background-color: #ffffff;
      border-top: 1px solid #e1e4e8;
      line-height: 1.6;
      color: #333;
    }
    .post-item.active .post-body {
      display: block;
    }
  </style>
</head>
<body>

<div class="inline-board">
  <h2>깃허브 게시판</h2>
  
  <!-- 첫 번째 글 -->
  <div class="post-item">
    <div class="post-header" onclick="togglePost(this)">
      <span class="post-title">페이지 이동 없는 게시판 구현 안내입니다.</span>
      <span class="post-date">2026-09-01</span>
    </div>
    <div class="post-body">
      <p>제목을 클릭하면 별도의 페이지 로딩이나 이동 없이 아래로 본문이 부드럽게 펼쳐집니다. GitHub Pages에 이 파일을 올리면 바로 웹에서 확인할 수 있습니다.</p>
    </div>
  </div>

  <!-- 두 번째 글 -->
  <div class="post-item">
    <div class="post-header" onclick="togglePost(this)">
      <span class="post-title">두 번째 게시글입니다. 클릭해 보세요!</span>
      <span class="post-date">2026-09-02</span>
    </div>
    <div class="post-body">
      <p>HTML, CSS, JavaScript가 하나의 파일 안에 모두 포함되어 있어 추가적인 서버 설정 없이 깃허브 리포지토리에 바로 적용하기 편리합니다.</p>
    </div>
  </div>
</div>

<script>
  function togglePost(headerElement) {
    const postItem = headerElement.parentElement;
    postItem.classList.toggle('active');
  }
</script>

</body>
</html>
