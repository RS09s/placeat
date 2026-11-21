/**
 * PLACEAT (プレイスイート) — RICH GOURMET DECISION & MAP CONTROLLER
 * 1. 16 Food Genres with Mood Presets & Individual Toggle
 * 2. Smooth Drum-Roll Roulette with Auto-Slowdown or Manual Stop
 * 3. Zero-API-Key Free Google Maps Embed (100% Google Places DB Coverage)
 *    + GPS Geolocation & Area Search + Condition Filters
 */

(function () {
  "use strict";

  /* ==========================================================
     1. 16 FOOD GENRES MASTER DATA
  ========================================================== */
  const GENRES = [
    {
      id: "japanese",
      name: "和食",
      en: "JAPANESE / WASHOKU",
      img: "images/japanese.jpg",
      tagline: "ホッと落ち着く定食・割烹・季節の和食",
      groups: ["light"],
    },
    {
      id: "noodle",
      name: "ラーメン",
      en: "RAMEN & NOODLES",
      img: "images/noodle.jpg",
      tagline: "濃厚スープから淡麗系まで至福の一杯",
      groups: ["meat", "quick"],
    },
    {
      id: "sushi",
      name: "寿司",
      en: "SUSHI",
      img: "images/sushi.jpg",
      tagline: "新鮮なネタを味わう回転寿司・江戸前寿司",
      groups: ["light"],
    },
    {
      id: "chinese",
      name: "中華",
      en: "CHINESE CUISINE",
      img: "images/chinese.jpg",
      tagline: "餃子・麻婆豆腐・チャーハンでスタミナ満点",
      groups: ["meat", "quick", "party"],
    },
    {
      id: "italian",
      name: "イタリアン",
      en: "ITALIAN / PASTA & PIZZA",
      img: "images/italian.jpg",
      tagline: "本格パスタや窯焼きピザで華やかな食事",
      groups: ["party", "quick"],
    },
    {
      id: "asia",
      name: "アジア・エスニック",
      en: "ASIAN & ETHNIC",
      img: "images/asia.jpg",
      tagline: "タイ・ベトナム・韓国料理でスパイシーな刺激",
      groups: ["party"],
    },
    {
      id: "yakiniku",
      name: "焼肉",
      en: "YAKINIKU / BBQ",
      img: "images/yakiniku.jpg",
      tagline: "香ばしい炭火とジューシーなお肉でご褒美タイム",
      groups: ["meat", "party"],
    },
    {
      id: "western",
      name: "洋食",
      en: "WESTERN BISTRO",
      img: "images/western.jpg",
      tagline: "ハンバーグ・オムライス・グラタンの王道洋食",
      groups: ["meat", "quick"],
    },
    {
      id: "nabe",
      name: "鍋",
      en: "HOT POT / NABE",
      img: "images/nabe.jpg",
      tagline: "しゃぶしゃぶ・もつ鍋・すき焼きを囲んで温まる",
      groups: ["light", "party"],
    },
    {
      id: "chicken",
      name: "焼き鳥",
      en: "YAKITORI & IZAKAYA",
      img: "images/chicken.jpg",
      tagline: "炭火焼き鳥とお酒で気軽に乾杯",
      groups: ["meat", "party"],
    },
    {
      id: "steak",
      name: "ステーキ",
      en: "STEAK & GRILL",
      img: "images/steak.jpg",
      tagline: "分厚い赤身肉や鉄板グリルをガッツリ堪能",
      groups: ["meat"],
    },
    {
      id: "seafood",
      name: "海鮮",
      en: "SEAFOOD BOWL & IZAKAYA",
      img: "images/seafood.jpg",
      tagline: "豪快な海鮮丼や刺身盛り合わせを堪能",
      groups: ["light", "party"],
    },
    {
      id: "tempura",
      name: "天ぷら",
      en: "TEMPURA",
      img: "images/tempura.jpg",
      tagline: "揚げたてサクサクの旬食材と天丼",
      groups: ["light"],
    },
    {
      id: "okonomiyaki",
      name: "お好み焼き",
      en: "OKONOMIYAKI & TEPPAN",
      img: "images/okonomiyaki.jpg",
      tagline: "熱々の鉄板を囲んでお好み焼き・もんじゃ",
      groups: ["party"],
    },
    {
      id: "curry",
      name: "カレー",
      en: "CURRY & SPICE",
      img: "images/curry.jpg",
      tagline: "スパイス香る本格カレー・欧風カレーで即チャージ",
      groups: ["quick", "meat"],
    },
    {
      id: "fastfood",
      name: "ファストフード",
      en: "BURGER & FAST FOOD",
      img: "images/fastfood.jpg",
      tagline: "グルメバーガーやカフェで手軽にサクッと",
      groups: ["quick"],
    },
  ];

  // Track active genre IDs
  const activeSet = new Set(GENRES.map((g) => g.id));
  let currentSelectedGenre = GENRES[6]; // Default: 焼肉
  let currentCondition = "";
  let currentLocationQuery = "東京駅"; // Or "lat,lng" when GPS is used
  let currentLocationLabel = "東京駅";

  /* ==========================================================
     2. RENDER 16 GENRE CARDS & MOOD PRESETS
  ========================================================== */
  const gridEl = document.getElementById("genre-grid");
  const activeCountEl = document.getElementById("active-count");
  const presetBtns = document.querySelectorAll(".preset-btn");

  function renderGenreCards() {
    if (!gridEl) return;
    gridEl.innerHTML = "";

    GENRES.forEach((g) => {
      const isIncluded = activeSet.has(g.id);
      const card = document.createElement("article");
      card.className = `genre-card${isIncluded ? "" : " is-excluded"}`;
      card.setAttribute("data-id", g.id);

      card.innerHTML = `
        <div class="genre-img-wrap">
          <img src="${g.img}" alt="${g.name}" loading="lazy" />
          <span class="genre-check-badge">${isIncluded ? "✓ 候補ON" : "除外中"}</span>
        </div>
        <div class="genre-body">
          <div class="genre-title-wrap">
            <span class="genre-title-jp">${g.name}</span>
            <span class="genre-title-en">${g.en}</span>
          </div>
          <button type="button" class="genre-direct-map-btn" data-direct-id="${g.id}" title="${g.name}をすぐマップで探す">
            📍 地図
          </button>
        </div>
      `;

      // Click card to toggle ON/OFF
      card.addEventListener("click", (e) => {
        const directBtn = e.target.closest(".genre-direct-map-btn");
        if (directBtn) {
          e.stopPropagation();
          selectGenreAndScrollToMap(g);
          return;
        }
        if (activeSet.has(g.id)) {
          activeSet.delete(g.id);
        } else {
          activeSet.add(g.id);
        }
        updateCardStates();
      });

      gridEl.appendChild(card);
    });
    updateCounter();
  }

  function updateCardStates() {
    if (!gridEl) return;
    const cards = gridEl.querySelectorAll(".genre-card");
    cards.forEach((card) => {
      const id = card.getAttribute("data-id");
      const badge = card.querySelector(".genre-check-badge");
      if (activeSet.has(id)) {
        card.classList.remove("is-excluded");
        if (badge) badge.textContent = "✓ 候補ON";
      } else {
        card.classList.add("is-excluded");
        if (badge) badge.textContent = "除外中";
      }
    });
    updateCounter();
  }

  function updateCounter() {
    if (activeCountEl) {
      activeCountEl.textContent = String(activeSet.size);
    }
  }

  presetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      presetBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const preset = btn.getAttribute("data-preset");
      activeSet.clear();

      if (preset === "all") {
        GENRES.forEach((g) => activeSet.add(g.id));
      } else if (preset === "none") {
        // leave empty
      } else {
        GENRES.forEach((g) => {
          if (g.groups.includes(preset)) activeSet.add(g.id);
        });
      }
      updateCardStates();
    });
  });

  renderGenreCards();

  /* ==========================================================
     3. ROULETTE ENGINE (SPIN / STOP / AUTO-DECIDE)
  ========================================================== */
  const rouletteCard = document.getElementById("roulette-card");
  const rouletteStatus = document.getElementById("roulette-status");
  const rouletteWindow = document.getElementById("roulette-window");
  const rouletteImg = document.getElementById("roulette-img");
  const rouletteEn = document.getElementById("roulette-en");
  const rouletteName = document.getElementById("roulette-name");
  const rouletteTagline = document.getElementById("roulette-tagline");

  const btnSpin = document.getElementById("btn-spin");
  const btnSpinText = document.getElementById("btn-spin-text");
  const btnStop = document.getElementById("btn-stop");
  const decidedBanner = document.getElementById("decided-banner");
  const btnFindNearby = document.getElementById("btn-find-nearby");

  let spinTimer = null;
  let isSpinning = false;

  function getActiveGenres() {
    return GENRES.filter((g) => activeSet.has(g.id));
  }

  function displayGenreOnStage(genre) {
    if (rouletteImg) rouletteImg.src = genre.img;
    if (rouletteEn) rouletteEn.textContent = genre.en;
    if (rouletteName) rouletteName.textContent = genre.name;
    if (rouletteTagline) rouletteTagline.textContent = genre.tagline;

    // Highlight corresponding card in grid
    if (gridEl) {
      gridEl.querySelectorAll(".genre-card").forEach((c) => {
        if (c.getAttribute("data-id") === genre.id) {
          c.classList.add("is-highlighting");
        } else {
          c.classList.remove("is-highlighting");
        }
      });
    }
  }

  function startRoulette() {
    const candidates = getActiveGenres();
    if (candidates.length === 0) {
      alert("候補ジャンルが0個です！下のカードから1つ以上ONにしてください。");
      return;
    }

    if (candidates.length === 1) {
      finalizeDecision(candidates[0]);
      return;
    }

    isSpinning = true;
    if (rouletteCard) rouletteCard.classList.remove("is-decided");
    if (decidedBanner) decidedBanner.style.display = "none";
    if (btnSpin) btnSpin.style.display = "none";
    if (btnStop) btnStop.style.display = "inline-flex";
    if (rouletteStatus) rouletteStatus.textContent = "SPINNING... // 抽選中";

    let idx = 0;
    spinTimer = setInterval(() => {
      const pick = candidates[idx % candidates.length];
      currentSelectedGenre = pick;
      displayGenreOnStage(pick);
      if (rouletteWindow) {
        rouletteWindow.style.transform = idx % 2 === 0 ? "scale(1.015)" : "scale(0.99)";
      }
      idx += Math.floor(Math.random() * 2) + 1;
    }, 75);
  }

  function stopRoulette() {
    if (!isSpinning) return;
    if (spinTimer) clearInterval(spinTimer);
    isSpinning = false;

    const candidates = getActiveGenres();
    const winner =
      candidates.length > 0
        ? candidates[Math.floor(Math.random() * candidates.length)]
        : currentSelectedGenre;

    finalizeDecision(winner);
  }

  function finalizeDecision(winner) {
    currentSelectedGenre = winner;
    displayGenreOnStage(winner);

    if (rouletteWindow) rouletteWindow.style.transform = "scale(1)";
    if (rouletteCard) rouletteCard.classList.add("is-decided");
    if (rouletteStatus) rouletteStatus.textContent = "🎉 DECIDED! // 今日のごはん決定";
    if (btnStop) btnStop.style.display = "none";
    if (btnSpin) {
      btnSpin.style.display = "inline-flex";
      if (btnSpinText) btnSpinText.textContent = "もう一度回す (RETRY)";
    }
    if (decidedBanner) decidedBanner.style.display = "block";

    // Sync Map section to decided genre immediately
    updateMapDisplay();
  }

  if (btnSpin) btnSpin.addEventListener("click", startRoulette);
  if (btnStop) btnStop.addEventListener("click", stopRoulette);

  if (btnFindNearby) {
    btnFindNearby.addEventListener("click", () => {
      selectGenreAndScrollToMap(currentSelectedGenre);
    });
  }

  function selectGenreAndScrollToMap(genre) {
    currentSelectedGenre = genre;
    displayGenreOnStage(genre);
    updateMapDisplay();
    const mapSec = document.getElementById("sec-map");
    if (mapSec) {
      mapSec.scrollIntoView({ behavior: "smooth" });
    }
  }

  /* ==========================================================
     4. ZERO-API-KEY FREE GOOGLE MAPS FINDER (GPS & AREA)
  ========================================================== */
  const mapGenreLabel = document.getElementById("map-genre-label");
  const areaInput = document.getElementById("area-input");
  const btnAreaSearch = document.getElementById("btn-area-search");
  const btnGps = document.getElementById("btn-gps");
  const condChips = document.querySelectorAll(".cond-chip");
  const mapQueryDisplay = document.getElementById("map-query-display");
  const mapIframe = document.getElementById("google-map-iframe");

  const linkGmaps = document.getElementById("link-gmaps");
  const linkTabelog = document.getElementById("link-tabelog");
  const linkWeb = document.getElementById("link-web");

  function updateMapDisplay() {
    const genreName = currentSelectedGenre.name;
    if (mapGenreLabel) mapGenreLabel.textContent = genreName;

    const fullQuery = [currentLocationQuery, genreName, currentCondition]
      .filter(Boolean)
      .join(" ");

    const displayLabel = [currentLocationLabel, genreName, currentCondition]
      .filter(Boolean)
      .join(" × ");

    if (mapQueryDisplay) {
      mapQueryDisplay.textContent = `📍 表示中：「${displayLabel}」の周辺マップ`;
    }

    const encodedQuery = encodeURIComponent(fullQuery);
    if (mapIframe) {
      mapIframe.src = `https://maps.google.com/maps?q=${encodedQuery}&t=m&z=15&output=embed&iwloc=near`;
    }

    // Update external action links
    if (linkGmaps) {
      linkGmaps.href = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
    }
    if (linkTabelog) {
      const tbQuery = encodeURIComponent(
        `${currentLocationLabel === "現在地周辺" ? "" : currentLocationLabel} ${genreName}`.trim()
      );
      linkTabelog.href = `https://tabelog.com/rstLst/?vs=1&sk=${tbQuery}`;
    }
    if (linkWeb) {
      const webQuery = encodeURIComponent(`${currentLocationLabel} ${genreName} おすすめ`);
      linkWeb.href = `https://www.google.com/search?q=${webQuery}`;
    }
  }

  // Area input search
  function applyAreaInput() {
    if (!areaInput) return;
    const val = areaInput.value.trim() || "東京駅";
    currentLocationQuery = val;
    currentLocationLabel = val;
    updateMapDisplay();
  }

  if (btnAreaSearch) {
    btnAreaSearch.addEventListener("click", applyAreaInput);
  }
  if (areaInput) {
    areaInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        applyAreaInput();
      }
    });
  }

  // GPS Geolocation + Free Reverse Geocoding (Converts GPS lat/lng into exact ward/town address!)
  async function reverseGeocodeToAddress(lat, lng) {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=ja`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Reverse geocode HTTP error");
      const data = await res.json();
      const addr = data.address || {};
      const parts = [
        addr.province || addr.state || "",
        addr.city || addr.ward || addr.town || addr.village || addr.county || "",
        addr.suburb || addr.quarter || addr.neighbourhood || "",
      ].filter(Boolean);
      // Remove duplicate adjacent strings
      const uniqueParts = parts.filter((item, idx) => parts.indexOf(item) === idx);
      if (uniqueParts.length > 0) {
        return uniqueParts.join("");
      }
    } catch (_) {
      // Fallback to lat,lng if reverse geocode fails
    }
    return `${lat},${lng}`;
  }

  function requestCurrentLocation(isAuto = false) {
    if (!navigator.geolocation) {
      if (!isAuto) {
        alert("お使いのブラウザは現在地取得（Geolocation）に対応していません。駅名・エリアを入力してください。");
      }
      return;
    }

    if (btnGps) {
      btnGps.innerHTML = "<span>📡 現在地を取得中...</span>";
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude.toFixed(5);
        const lng = pos.coords.longitude.toFixed(5);
        const resolvedAddress = await reverseGeocodeToAddress(lat, lng);
        currentLocationQuery = resolvedAddress;
        currentLocationLabel =
          resolvedAddress === `${lat},${lng}` ? "現在地周辺" : resolvedAddress;
        if (areaInput) {
          areaInput.value = currentLocationLabel;
        }
        try {
          localStorage.setItem("placeat_last_area", currentLocationLabel);
        } catch (_) {}
        if (btnGps) {
          btnGps.innerHTML = `<span>✓ 現在地（${currentLocationLabel}）</span>`;
        }
        updateMapDisplay();
      },
      () => {
        if (btnGps) {
          btnGps.innerHTML = "<span>📡 現在地（GPS）から探す</span>";
        }
        if (!isAuto) {
          alert(
            "ブラウザの位置情報がブロックされているか取得できませんでした。アドレスバー左のアイコンから位置情報を許可するか、右側の入力欄にご自宅のエリア・最寄り駅を入力してください！"
          );
        }
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }

  // Save manual input to localStorage so the user's home area persists across reloads
  const origApplyAreaInput = applyAreaInput;
  function applyAndSaveAreaInput() {
    origApplyAreaInput();
    try {
      if (areaInput && areaInput.value.trim()) {
        localStorage.setItem("placeat_last_area", areaInput.value.trim());
      }
    } catch (_) {}
  }

  if (btnAreaSearch) {
    btnAreaSearch.removeEventListener("click", applyAreaInput);
    btnAreaSearch.addEventListener("click", applyAndSaveAreaInput);
  }

  if (btnGps) {
    btnGps.addEventListener("click", () => requestCurrentLocation(false));
  }

  // On initial load: restore saved home area OR automatically detect current GPS address!
  (function initUserLocation() {
    let saved = "";
    try {
      saved = localStorage.getItem("placeat_last_area") || "";
    } catch (_) {}

    if (saved) {
      currentLocationQuery = saved;
      currentLocationLabel = saved;
      if (areaInput) areaInput.value = saved;
      updateMapDisplay();
    }
    // Always attempt automatic GPS detection on load so it snaps to current address if allowed
    requestCurrentLocation(true);
  })();

  // Condition filter chips
  condChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      condChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      currentCondition = chip.getAttribute("data-cond") || "";
      updateMapDisplay();
    });
  });

  // Legacy onload compatibility
  window.DefaultSave = function () {};
})();
