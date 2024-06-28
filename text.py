import time
import threading
import pyautogui

# A sample text with more than 100 words
sample_text = (
    
    '''
<!DOCTYPE html>
\n<html lang="en">
  \n<head>
    \n<meta charset="UTF-8" />
    \n<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    \n<title>Editable Table with Bootstrap</title>
    \n<link
      \nhref="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      \nrel="stylesheet"
    \n/>
    \n<style>
      .editable {
        background-color: #f0f0f0;
      }
      td {
        max-width: 200px; 
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    </style>
  \n</head>
  \n<body>
    \n<div class="container mt-3">
      \n<div class="form-check mb-3">
        \n<input type="checkbox" class="form-check-input" id="editCheckbox" />
        \n<label class="form-check-label" for="editCheckbox"
          \n>Enable Editing</label
       \n>
      \n</div>
      <table class="table table-bordered" id="editableTable">
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-row="1" data-col="1">Row 1, Col 1</td>
            <td data-row="1" data-col="2">Row 1, Col 2</td>
          </tr>
          <tr>
            <td data-row="2" data-col="1">Row 2, Col 1</td>
            <td data-row="2" data-col="2">Row 2, Col 2</td>
          </tr>
        </tbody>
      </table>
    </div>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script>
      const editCheckbox = document.getElementById("editCheckbox");
      const table = document.getElementById("editableTable");

      table.addEventListener("click", function (event) {
        if (event.target.tagName === "TD" && editCheckbox.checked) {
          const cell = event.target;
          if (!cell.isContentEditable) {
            cell.contentEditable = true;
            cell.classList.add("editable");
            cell.style.maxWidth = cell.clientWidth + "px";
            cell.focus();
          }
        }
      });

      table.addEventListener(
        "blur",
        function (event) {
          if (event.target.tagName === "TD") {
            const cell = event.target;
            if (cell.isContentEditable) {
              cell.contentEditable = false;
              cell.classList.remove("editable");
              cell.style.maxWidth = ""; 
             saveCellData(cell);
            }
          }
        },
        true
      );

      function saveCellData(cell) {
        const row = cell.getAttribute("data-row");
        const col = cell.getAttribute("data-col");
        const value = cell.textContent;
        console.log(value);
      }
    </script>
  </body>
</html>


 
    '''
)

def type_and_store(text, interval=30, typing_delay=2.5):
    words = text.split()
    total_words = len(words)
    written_text = []

    # Add a 10-second delay before starting the typing process
    print("Starting in 10 seconds. Please position your cursor.")
    time.sleep(10)

    def type_words(start, end):
        nonlocal written_text
        for i in range(start, min(end, total_words)):
            pyautogui.typewrite(words[i] + ' ')
            written_text.append(words[i])
            if (i + 1) % 40 == 0:
               print("hello")
            if (i + 1) % 100 == 0:
                break
            time.sleep(typing_delay)
    
    
    def move_mouse():
        while True:
            pyautogui.moveRel(10, 0)  # Move mouse cursor 10 pixels to the right
            time.sleep(1)
            pyautogui.moveRel(-10, 0)  # Move mouse cursor 10 pixels to the left
            time.sleep(1)
    
    # Run mouse movement in a separate thread
    mouse_thread = threading.Thread(target=move_mouse)
    mouse_thread.daemon = True
    mouse_thread.start()

    while True:
        start = 0
        while start < total_words:
            end = start + 100
            type_words(start, end)
            start += 100
            if start < total_words:
                time.sleep(interval)
        print("Completed one cycle of text. Waiting for 60 seconds before restarting.")
        time.sleep(220)

# Start the typing thread
typing_thread = threading.Thread(target=type_and_store, args=(sample_text,))
typing_thread.start()