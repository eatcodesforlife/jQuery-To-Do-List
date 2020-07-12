$(document).ready(() => {
  //add task
  $("#new-task").keyup(function (e) {
    let key = e.which;

    if (key === 13) {
      $("ul#running-tasks").append(`
      <li class='current-item item'>
        <input type='checkbox' class='checkbox-current-item'>
        ${e.target.value}<button class="delete-item">X</button>
      </li>
      `);
      $(this).val("");
    }
  });
  //completed task
  $("ul#running-tasks").on("change", "li.current-item", (e) => {
    $(e.currentTarget)
      .removeClass("current-item")
      .addClass("completed-item")
      .css({
        opacity: ".8",
        "text-decoration": "line-through",
      })
      .appendTo("ul#completed-tasks");
  });
  //redo task
  $("ul#completed-tasks").on("change", "li.completed-item", (e) => {
    $(e.currentTarget)
      .removeClass("completed-item")
      .addClass("current-item")
      .css({
        opacity: "1",
        "text-decoration": "none",
      })
      .appendTo("ul#running-tasks");
  });

  //delete task
  $("ul.tasks").on("click", "li.item button.delete-item", (e) => {
    let button = $(e.currentTarget);
    $(button.parent()).detach();
  });
});
