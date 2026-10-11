(() => {
  const filters = document.querySelector(".blog-filters");
  if (!filters) return;

  const options = filters.querySelector(".blog-topic-options");
  const empty = document.querySelector(".blog-filter-empty");
  const normalize = (topic) => topic.trim().toLocaleLowerCase();
  const parseTopics = (value) => {
    const topics = JSON.parse(value || "[]");
    return Array.isArray(topics) ? topics.filter((topic) => typeof topic === "string" && topic.trim()) : [];
  };
  const cards = Array.from(document.querySelectorAll(".blog-card"), (element) => ({
    element,
    topics: parseTopics(element.dataset.topics),
  }));
  const topics = new Map();
  const selected = new Set();

  const addTopic = (topic) => {
    const key = normalize(topic);
    if (!topics.has(key)) topics.set(key, topic.trim());
  };
  parseTopics(filters.dataset.topics).forEach(addTopic);
  cards
    .flatMap((card) => card.topics)
    .sort((a, b) => a.localeCompare(b))
    .forEach(addTopic);

  const createButton = (label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "blog-topic-button";
    button.textContent = label;
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-controls", "blog-posts");
    options.append(button);
    return button;
  };
  const allButton = createButton("All posts");
  const topicButtons = new Map();

  const update = () => {
    let visible = 0;
    cards.forEach((card) => {
      const matches = selected.size === 0 || card.topics.some((topic) => selected.has(normalize(topic)));
      card.element.hidden = !matches;
      if (matches) visible += 1;
    });
    allButton.setAttribute("aria-pressed", String(selected.size === 0));
    topicButtons.forEach((button, topic) => button.setAttribute("aria-pressed", String(selected.has(topic))));
    empty.hidden = visible > 0 || selected.size === 0;
  };
  const reset = () => {
    selected.clear();
    update();
  };

  allButton.addEventListener("click", reset);
  topics.forEach((label, topic) => {
    const button = createButton(label);
    topicButtons.set(topic, button);
    button.addEventListener("click", () => {
      if (selected.has(topic)) selected.delete(topic);
      else selected.add(topic);
      update();
    });
  });
  empty.querySelector("[data-reset-topics]").addEventListener("click", () => {
    reset();
    allButton.focus();
  });
  update();
  filters.hidden = false;
})();
