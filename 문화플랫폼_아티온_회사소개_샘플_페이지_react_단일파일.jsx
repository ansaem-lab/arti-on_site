<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>문화플랫폼 아티온 (ARTION)</title>
  <meta name="description" content="문화·기술·사람을 잇는 경험 디자인 스튜디오 — 아티온 회사소개" />
  <!-- Tailwind CDN (간단 배포용) -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-50 text-slate-800">
  <!-- Header -->
  <header class="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
    <div class="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
      <a href="#home" class="font-semibold">문화플랫폼 아티온 (ARTION)</a>
      <nav class="hidden md:flex gap-6 text-sm">
        <a href="#about" class="hover:opacity-70">회사소개</a>
        <a href="#services" class="hover:opacity-70">서비스</a>
        <a href="#cases" class="hover:opacity-70">프로젝트</a>
        <a href="#clients" class="hover:opacity-70">클라이언트</a>
        <a href="#contact" class="hover:opacity-70">문의</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="home" class="max-w-6xl mx-auto px-4 py-12">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <span class="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border bg-white">
          경험 디자인 스튜디오
        </span>
        <h1 class="mt-4 text-4xl font-semibold leading-tight">
          문화·기술·사람을 잇는 경험 디자인 스튜디오
        </h1>
        <p class="mt-4 text-slate-600 leading-relaxed">
          아티온은 도시와 유산, 브랜드와 관객을 연결하는 문화기획/운영 전문 기업입니다.
          야행·축제·전시·인터랙티브 미디어 등 온·오프라인 프로젝트를 기획·디자인·운영까지 수행합니다.
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
          <span class="text-xs px-3 py-1.5 rounded-full bg-slate-100 border">국가유산 야행</span>
          <span class="text-xs px-3 py-1.5 rounded-full bg-slate-100 border">전시/미디어</span>
          <span class="text-xs px-3 py-1.5 rounded-full bg-slate-100 border">XR/웹앱</span>
          <span class="text-xs px-3 py-1.5 rounded-full bg-slate-100 border">브랜딩</span>
        </div>
        <div class="mt-8 flex gap-3">
          <a href="#contact" class="inline-flex items-center gap-2 rounded-xl px-4 py-2 border bg-black text-white">프로젝트 문의</a>
          <a href="#services" class="inline-flex items-center gap-2 rounded-xl px-4 py-2 border bg-white">서비스 보기</a>
        </div>
      </div>
      <div>
        <div class="aspect-[4/3] rounded-3xl bg-gradient-to-br from-indigo-100 via-violet-100 to-sky-100 border shadow-inner p-4 grid place-items-center text-center text-slate-500">
          프로젝트 이미지/영상 영역 · 1280×960 권장
        </div>
      </div>
    </div>
  </section>

  <!-- About / Services / Cases / Clients (간략 버전) -->
  <section id="about" class="max-w-6xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-semibold mb-4">회사소개</h2>
    <div class="grid lg:grid-cols-3 gap-6 text-sm text-slate-700">
      <div class="p-6 bg-white/70 rounded-2xl border">설립: 2018<br>분야: 야행/축제·전시·XR·브랜딩</div>
      <div class="p-6 bg-white/70 rounded-2xl border">핵심: 스토리 기반 참여형 경험 설계, 현장 운영/안전, 디자인 시스템</div>
      <div class="p-6 bg-white/70 rounded-2xl border">하이라이트: 국가유산 야행 다수, 만족도 평균 94%</div>
    </div>
  </section>

  <section id="services" class="max-w-6xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-semibold">서비스</h2>
    <div class="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6 text-sm">
      <div class="p-6 bg-white/70 rounded-2xl border"><b>국가유산·도시축제</b><br>콘셉트/운영/브랜딩</div>
      <div class="p-6 bg-white/70 rounded-2xl border"><b>전시·미디어아트</b><br>공간/연출/그래픽</div>
      <div class="p-6 bg-white/70 rounded-2xl border"><b>디지털·XR</b><br>웹/앱·WebAR·3D</div>
      <div class="p-6 bg-white/70 rounded-2xl border"><b>브랜드·마케팅</b><br>BI/가이드·캠페인</div>
    </div>
  </section>

  <section id="cases" class="max-w-6xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-semibold">프로젝트</h2>
    <div class="mt-6 grid lg:grid-cols-3 gap-6 text-sm">
      <div class="p-6 bg-white/70 rounded-2xl border">
        <div class="aspect-video bg-slate-100 rounded-xl grid place-items-center">썸네일</div>
        <div class="mt-3 font-medium">2025 용산 국가유산 야행</div>
        <div class="text-slate-600">독립운동 IP 기반 리얼월드 미션</div>
      </div>
      <div class="p-6 bg-white/70 rounded-2xl border">
        <div class="aspect-video bg-slate-100 rounded-xl grid place-items-center">썸네일</div>
        <div class="mt-3 font-medium">연천 전곡리 유적 야행</div>
        <div class="text-slate-600">기후 테마·체험형 콘텐츠</div>
      </div>
      <div class="p-6 bg-white/70 rounded-2xl border">
        <div class="aspect-video bg-slate-100 rounded-xl grid place-items-center">썸네일</div>
        <div class="mt-3 font-medium">경주 세계유산축전</div>
        <div class="text-slate-600">분황사 음악회·석굴암 명상</div>
      </div>
    </div>
  </section>

  <section id="clients" class="max-w-6xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-semibold">클라이언트 & 파트너</h2>
    <div class="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-sm">
      <div class="p-4 bg-white/70 rounded-xl border text-center">문화재청</div>
      <div class="p-4 bg-white/70 rounded-xl border text-center">지자체/재단</div>
      <div class="p-4 bg-white/70 rounded-xl border text-center">대학/연구소</div>
      <div class="p-4 bg-white/70 rounded-xl border text-center">대기업/에이전시</div>
      <div class="p-4 bg-white/70 rounded-xl border text-center">로컬 크리에이터</div>
    </div>
  </section>

  <section id="contact" class="max-w-6xl mx-auto px-4 py-12">
    <h2 class="text-2xl font-semibold mb-4">문의</h2>
    <div class="grid lg:grid-cols-3 gap-6">
      <div class="p-6 bg-white/70 rounded-2xl border">
        <div class="text-sm">이메일: contact@artion.co.kr<br>전화: 010-0000-0000<br>주소: 서울시 ○○구 ○○로 00</div>
      </div>
      <div class="p-6 bg-white/70 rounded-2xl border lg:col-span-2">
        <form action="#" class="grid gap-3 text-sm">
          <input class="px-3 py-2 rounded-xl border" placeholder="회사/기관명">
          <div class="grid sm:grid-cols-2 gap-3">
            <input class="px-3 py-2 rounded-xl border" placeholder="담당자명">
            <input class="px-3 py-2 rounded-xl border" placeholder="연락처/이메일">
          </div>
          <textarea rows="4" class="px-3 py-2 rounded-xl border" placeholder="프로젝트 개요/예산/일정 등"></textarea>
          <button type="button" class="px-4 py-2 rounded-xl border bg-black text-white">보내기(샘플)</button>
        </form>
      </div>
    </div>
  </section>

  <footer class="py-10 border-t">
    <div class="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div>© <span id="year"></span> 문화플랫폼 아티온. All rights reserved.</div>
      <div>사업자등록번호 000-00-00000</div>
    </div>
  </footer>

  <script>document.getElementById('year').textContent = new Date().getFullYear()</script>
</body>
</html>
