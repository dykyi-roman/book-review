const bookList = [
  {
    title: "The 7 Habits of Highly Effective People",
    url: "https://dykyi-roman.github.io/book-review/7_habits_of_highly_effective_people.html"
  },
  {
    title: "The Power of Habit",
    url: "https://dykyi-roman.github.io/book-review/the_power_of_habit.html"
  },
  {
    title: "Thinking, Fast and Slow",
    url: "https://dykyi-roman.github.io/book-review/thinking_fast_and_slow.html" 
  },
  {
    title: "The Story of My Life",
    url: "https://dykyi-roman.github.io/book-review/story_of_my_life.html" 
  },
  {
    title: "From Third World To First: The Singapore Story: 1965-2000",
    url: "https://dykyi-roman.github.io/book-review/from_third_world_to_first-the_singapore_story_1965_2000.html"
  },
  {
    title: "Atlas Shrugged",
    url: "https://dykyi-roman.github.io/book-review/atlas_shrugged.html"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    url: "https://dykyi-roman.github.io/book-review/sapiens-a_brief_history_of_humankind.html"
  },
  {
    title: "Elegant Objects",
    url: "https://dykyi-roman.github.io/book-review/elegant_objects.html"
  }
];

function loadBooks() {
  const bookListElement = document.querySelector('.book-list');

  bookList.forEach(book => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'white-text';
    a.href = book.url;
    a.textContent = book.title;

    li.appendChild(a);
    bookListElement.appendChild(li);
  });
}

window.onload = loadBooks;
