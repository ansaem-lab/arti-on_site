import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Building2, Sparkles, CheckCircle2, ChevronRight, Users, Calendar, BadgeCheck } from "lucide-react";

// ✅ 샘플 데이터 (필요 시 이곳만 수정하세요)
const COMPANY = {
  name: "문화플랫폼 아티온 (ARTION)",
  tagline: "문화·기술·사람을 잇는 경험 디자인 스튜디오",
  summary:
    "아티온은 도시와 유산, 브랜드와 관객을 연결하는 문화기획/운영 전문 기업입니다. 야행·축제·전시·인터랙티브 미디어 등 온·오프라인 프로젝트를 기획·디자인·운영까지 원스톱으로 수행합니다.",
  since: "2018",
  regNo: "000-00-00000",
  email: "contact@artion.co.kr",
  phone: "+82-10-0000-0000",
  address: "서울특별시 ○○구 ○○로 00, 5F",
  keywords: ["국가유산 야행", "전시/공연", "XR/미디어", "브랜드/SNS", "MICE"],
};

const SERVICES = [
  {
    title: "국가유산·도시축제",
    desc: "야행·축제·퍼포먼스·투어 콘텐츠 기획/운영. 참여형 미션, 스탬프투어, 스토리텔링 설계.",
    points: ["콘셉트 개발", "현장 운영/안전", "크리에이티브/브랜딩"],
  },
  {
    title: "전시·미디어아트",
    desc: "상설/기획전, 인터랙티브 미디어, 공간 브랜딩, 몰입형 연출.",
    points: ["공간/동선 설계", "멀티미디어 연출", "그래픽/카피"],
  },
  {
    title: "디지털·XR",
    desc: "웹/앱, WebAR, 리얼월드 GPS, 3D/UE5, 데이터 시각화.",
    points: ["프로토타입", "UI/UX", "서비스 운영"],
  },
  {
    title: "브랜드·마케팅",
    desc: "네이밍/아이덴티티, 캠페인, 옥외/디지털 광고, 카드뉴스/영상.",
    points: ["BI/가이드", "콘텐츠 제작", "미디어 운영"],
  },
];

const HIGHLIGHTS = [
  {
    k: "국가유산 야행",
    v: "연간 다수 프로젝트 운영",
  },
  {
    k: "관람객 만족도",
    v: "평균 94% (자체 설문)",
  },
  {
    k: "파트너 네트워크",
    v: "지자체·기관·대학·크리에이터",
  },
];

const CASES = [
  {
    title: "2025 용산 국가유산 야행",
    tag: "역사·참여형",
    body:
      "효창공원 일대 독립운동 IP 기반 리얼월드 미션, 배우 연기/정답 입력형, SNS 확산.",
    stats: ["관람객 3.2만명", "UGC 5.8천건", "안전사고 0"],
  },
  {
    title: "연천 전곡리 유적 야행",
    tag: "선사·에코",
    body:
      "기후변화 테마, 뗀석기 체험/동굴벽화/토크콘서트, 야시장·로컬 연계.",
    stats: ["회차 6", "참여상인 40+", "미디어 노출 120건"],
  },
  {
    title: "경주 세계유산축전",
    tag: "유산·공연",
    body: "분황사 음악회·석굴암 명상, 감정 흐름 기반 동선/콘텐츠 큐레이션.",
    stats: ["객석 점유 96%", "만족도 95%"],
  },
];

const TIMELINE = [
  { y: "2025", t: "야행·축전 대형 프로젝트 동시 운영", d: "리얼월드 GPS형 야외 방탈출, XR 웹앱 통합" },
  { y: "2024", t: "브랜드/디지털 라인업 확장", d: "카드뉴스·웹/앱·대형 옥외광고 운영" },
  { y: "2018", t: "아티온 설립", d: "문화·기술 융합 프로젝트 시작" },
];

const CLIENTS = [
  "문화재청", "지자체/문화재단", "대학/연구소", "대기업/에이전시", "로컬 크리에이터"
];

export default function CompanyIntroAtion() {
  const [navOpen, setNavOpen] = useState(false);

  const Section = ({ id, children, className = "" }) => (
    <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
  );

  const Card = ({ children }) => (
    <div className="rounded-2xl bg-white/70 backdrop-blur shadow-sm border border-black/5 p-6 hover:shadow-md transition-shadow">{children}</div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-black/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <a href="#home" className="font-semibold tracking-tight">{COMPANY.name}</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">회사소개</a>
            <a href="#services" className="hover:opacity-70">서비스</a>
            <a href="#cases" className="hover:opacity-70">프로젝트</a>
            <a href="#clients" className="hover:opacity-70">클라이언트</a>
            <a href="#contact" className="hover:opacity-70">문의</a>
          </nav>
          <button className="md:hidden text-sm px-3 py-1.5 rounded-xl border" onClick={() => setNavOpen(!navOpen)}>메뉴</button>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-black/5 px-4 pb-3">
            <div className="flex flex-col gap-2 pt-2 text-sm">
              <a onClick={()=>setNavOpen(false)} href="#about">회사소개</a>
              <a onClick={()=>setNavOpen(false)} href="#services">서비스</a>
              <a onClick={()=>setNavOpen(false)} href="#cases">프로젝트</a>
              <a onClick={()=>setNavOpen(false)} href="#clients">클라이언트</a>
              <a onClick={()=>setNavOpen(false)} href="#contact">문의</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <Section id="home" className="pt-14 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-black/10 bg-white/60">
              <Sparkles className="w-4 h-4"/>
              경험 디자인 스튜디오
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              {COMPANY.tagline}
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">{COMPANY.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {COMPANY.keywords.map((k) => (
                <span key={k} className="text-xs px-3 py-1.5 rounded-full bg-slate-100 border border-black/5">{k}</span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border bg-black text-white hover:opacity-90">
                프로젝트 문의하기 <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border bg-white hover:bg-slate-50">
                서비스 보기 <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-indigo-100 via-violet-100 to-sky-100 border border-black/5 shadow-inner p-4">
              <div className="h-full w-full rounded-2xl border border-dashed border-black/10 grid place-items-center text-center p-6">
                <div>
                  <Building2 className="w-10 h-10 mx-auto mb-3"/>
                  <p className="text-sm text-slate-500">프로젝트 이미지/영상 영역 · 1280×960 권장</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-lg font-semibold">회사 개요</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><BadgeCheck className="w-4 h-4 mt-0.5"/> 설립: {COMPANY.since}년</li>
              <li className="flex items-start gap-2"><Users className="w-4 h-4 mt-0.5"/> 인력: 기획·디자인·운영·개발 크로스펑셔널</li>
              <li className="flex items-start gap-2"><Calendar className="w-4 h-4 mt-0.5"/> 주요 분야: 야행/축제·전시·XR·브랜딩</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">핵심 역량</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> 스토리 기반 참여형 경험 설계</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> 현장 운영 매뉴얼·안전·품질관리</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> 디자인 시스템·멀티포맷 제작</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">하이라이트</h3>
            <div className="mt-3 grid sm:grid-cols-3 gap-3">
              {HIGHLIGHTS.map((h)=> (
                <div key={h.k} className="rounded-xl bg-slate-50 border border-black/5 p-3">
                  <div className="text-[11px] text-slate-500">{h.k}</div>
                  <div className="text-sm font-medium">{h.v}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">서비스</h2>
          <a href="#contact" className="text-sm inline-flex items-center gap-1 hover:opacity-70">견적/미팅 문의 <ArrowRight className="w-4 h-4"/></a>
        </div>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <Card key={s.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> {p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Cases/Projects */}
      <Section id="cases" className="py-10">
        <h2 className="text-2xl font-semibold">프로젝트</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <Card key={c.title}>
              <div className="aspect-video rounded-xl bg-slate-100 border border-black/5 grid place-items-center text-slate-400 text-sm">
                프로젝트 썸네일
              </div>
              <div className="mt-4">
                <div className="text-xs inline-flex px-2 py-0.5 rounded-full bg-slate-100 border border-black/5">{c.tag}</div>
                <h3 className="mt-2 font-medium">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{c.body}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-slate-500">
                  {c.stats.map((s) => (
                    <span key={s} className="px-2 py-1 rounded-md bg-white border border-black/5">{s}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Clients */}
      <Section id="clients" className="py-10">
        <h2 className="text-2xl font-semibold">클라이언트 & 파트너</h2>
        <Card>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CLIENTS.map((c) => (
              <div key={c} className="rounded-xl border border-black/5 bg-white/60 p-4 text-center text-sm text-slate-600">{c}</div>
            ))}
          </div>
        </Card>
      </Section>

      {/* Timeline */}
      <Section id="timeline" className="py-10">
        <h2 className="text-2xl font-semibold">연혁</h2>
        <div className="mt-6 space-y-4">
          {TIMELINE.map((r) => (
            <div key={r.y} className="grid md:grid-cols-[120px_1fr] gap-4 items-start">
              <div className="text-sm text-slate-500 font-medium">{r.y}</div>
              <Card>
                <div className="font-medium">{r.t}</div>
                <div className="text-sm text-slate-600 mt-1">{r.d}</div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-12">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <Card>
            <h3 className="text-lg font-semibold">연락처</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> {COMPANY.email}</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> {COMPANY.phone}</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {COMPANY.address}</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">프로젝트 문의</h3>
            <form className="mt-3 grid grid-cols-1 gap-3">
              <input placeholder="회사/기관명" className="px-3 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-black/10" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input placeholder="담당자명" className="px-3 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-black/10" />
                <input placeholder="연락처/이메일" className="px-3 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-black/10" />
              </div>
              <select className="px-3 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-black/10">
                <option>문의 유형 선택</option>
                <option>야행/축제 기획·운영</option>
                <option>전시/미디어아트</option>
                <option>디지털/XR</option>
                <option>브랜드/마케팅</option>
              </select>
              <textarea rows={4} placeholder="프로젝트 개요/예산/일정 등"
                className="px-3 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-black/10" />
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 border bg-black text-white hover:opacity-90">
                보내기 (샘플)
              </button>
            </form>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">다운로드</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="underline hover:opacity-80" href="#">회사소개서(PDF) — 샘플</a></li>
              <li><a className="underline hover:opacity-80" href="#">포트폴리오 ZIP — 샘플</a></li>
              <li><a className="underline hover:opacity-80" href="#">로고/가이드 — 샘플</a></li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t border-black/5">
        <Section id="footer" className="">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
            <div>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
            <div className="flex flex-wrap items-center gap-3">
              <span>사업자등록번호 {COMPANY.regNo}</span>
              <a className="hover:opacity-70" href="#privacy">개인정보처리방침</a>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}
