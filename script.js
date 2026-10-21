
/* =========================================
   RESUME WEBSITE - SCRIPT.JS
   Thai / English | Mobile Menu | Print PDF
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ---------- 1. สลับภาษาไทย / อังกฤษ ----------
  const languageButtons = document.querySelectorAll(
    "[data-lang], [data-language]"
  );

  function setLanguage(language) {
    const lang = language === "en" ? "en" : "th";

    document.documentElement.lang = lang;

    // เปลี่ยนข้อความใน element ที่มี data-th และ data-en
    document.querySelectorAll("[data-th][data-en]").forEach(function (el) {
      el.textContent = el.getAttribute("data-" + lang) || "";
    });

    // เปลี่ยน placeholder ของช่องกรอกข้อมูล
    document.querySelectorAll("[data-placeholder-th][data-placeholder-en]")
      .forEach(function (el) {
        el.placeholder =
          el.getAttribute("data-placeholder-" + lang) || "";
      });

    // ระบุปุ่มภาษาที่กำลังใช้งาน
    languageButtons.forEach(function (button) {
      const buttonLang =
        button.getAttribute("data-lang") ||
        button.getAttribute("data-language");

      button.classList.toggle("active", buttonLang === lang);
      button.setAttribute(
        "aria-pressed",
        String(buttonLang === lang)
      );
    });

    // บันทึกภาษาที่เลือกไว้ในหน้านี้
    document.documentElement.dataset.currentLanguage = lang;
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const lang =
        button.getAttribute("data-lang") ||
        button.getAttribute("data-language");

      setLanguage(lang);
    });
  });

  // ใช้ภาษาไทยเป็นค่าเริ่มต้น
  setLanguage("th");


  // ---------- 2. เมนูสำหรับโทรศัพท์ ----------
  const menuButton = document.querySelector(
    "#menuToggle, .menu-toggle, .nav-toggle, [data-menu-toggle]"
  );

  const navigation = document.querySelector(
    "#navMenu, .nav-menu, .navbar-menu, .nav-links"
  );

  if (menuButton && navigation) {
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("active");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "ปิดเมนู" : "เปิดเมนู"
      );
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }


  // ---------- 3. ปุ่มพิมพ์ / บันทึก PDF ----------
  document.querySelectorAll(
    "#printResume, #printButton, .print-button, [data-print]"
  ).forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      window.print();
    });
  });


  // ---------- 4. แสดงปีปัจจุบัน ----------
  document.querySelectorAll(
    "#currentYear, [data-current-year]"
  ).forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });


  // ---------- 5. ปิดเมนูด้วยปุ่ม Escape ----------
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navigation && menuButton) {
      navigation.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

});
