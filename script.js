// App Portfolio Data
const appPortfolio = {
  "bluetooth-audio-switcher": {
    title: "Bluetooth Audio Switcher",
    catchphrase: "Switch audio routing dynamically between physical speakers and Bluetooth devices without disconnects.",
    badge: "Live",
    os: "Android",
    releaseDate: "June 2026",
    version: "v1.0.0",
    iconUrl: "./assets/ic_launcher_play.png",
    downloadUrl: "./downloads/bluetoothExtender.apk",
    features: [
      "Forced Physical Audio Path Routing override to built-in phone speakers.",
      "Background Foreground Service utilizing modern Media Playback API standard to prevent crashes.",
      "Sticky Notification panel control drawer for instant switching.",
      "Persistent Silent Audio Loop signaling Android Audio Policy to lock current routing.",
      "Automatic volume synchronization scaling media stream changes alongside call volume.",
      "Smart Bluetooth connection filter excluding smartwatches/BLE fitness bands."
    ]
  },
  "electronics-engineers": {
    title: "Electronics Engineers",
    catchphrase: "Interactive academic portal featuring real-time signal simulators, 8086 bus decoders, and complexity solvers.",
    badge: "Live",
    os: "Android",
    releaseDate: "June 2026",
    version: "v1.0.0",
    iconUrl: "./assets/electronics_engineers_icon.png",
    downloadUrl: "./downloads/acadmic_portal.apk",
    features: [
      "Dynamic Dual-Domain Oscilloscope tracing carrier envelopes and frequency spectrum spikes in real-time.",
      "8086 Segment Address Resolver converting physical memory values instantly.",
      "Data Structure Algorithm Estimator verifying space/time complexities (O(log N), O(N), O(N^2)) dynamically.",
      "Three engineering subjects integrated: Communication Systems, Microprocessors, and Fundamentals of Data Structures.",
      "Bilingual Hinglish Explanatory Guides bridging abstract formulas with real-world analogies.",
      "Fully responsive bottom-sheet modal layouts optimized for mobile WebView wrappers."
    ]
  }
};

// Initialize DOM elements
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("details-modal");
  const modalClose = document.getElementById("modal-close");
  const modalIcon = document.getElementById("modal-icon");
  const modalTitle = document.getElementById("modal-title");
  const modalCatchphrase = document.getElementById("modal-catchphrase");
  const modalOs = document.getElementById("modal-os");
  const modalVersion = document.getElementById("modal-version");
  const modalRelease = document.getElementById("modal-release");
  const modalFeatures = document.getElementById("modal-features");
  const modalDownload = document.getElementById("modal-download");

  // Open modal handler
  window.openAppDetails = (appKey) => {
    const app = appPortfolio[appKey];
    if (!app) return;

    modalIcon.src = app.iconUrl || "./assets/ic_launcher_play.png";
    modalTitle.textContent = app.title;
    modalCatchphrase.textContent = app.catchphrase;
    modalOs.textContent = app.os;
    modalVersion.textContent = app.version;
    modalRelease.textContent = app.releaseDate;
    modalDownload.href = app.downloadUrl;

    // Populate features list
    modalFeatures.innerHTML = "";
    app.features.forEach(feat => {
      const li = document.createElement("li");
      li.className = "flex items-start gap-2.5 text-slate-600 text-sm md:text-base leading-relaxed";
      li.innerHTML = `
        <span class="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
        <span>${feat}</span>
      `;
      modalFeatures.appendChild(li);
    });

    // Show modal with animation
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("overflow-hidden");
  };

  // Close modal function
  const closeModal = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("overflow-hidden");
  };

  // Attach event listeners for close actions
  if (modalClose) modalClose.addEventListener("click", closeModal);
  
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Escape key support
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
