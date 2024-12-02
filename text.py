import pyautogui
import time
import random
import os

# Long HTML code as input
texts_to_type = [
    """<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Long HTML Page</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
"""
]

# Function to simulate human typing
def simulate_typing(text, words_per_minute=40):
    delay_between_chars = 60 / (words_per_minute * 5)  # Approximate delay (5 chars per word)
    for char in text:
        pyautogui.typewrite(char)  # Type the character
        time.sleep(delay_between_chars + random.uniform(0.01, 0.05))  # Add randomness to typing speed
        # Randomly move the mouse occasionally during typing
        if random.random() < 0.05:  # 5% chance to move the mouse
            random_mouse_move()

# Function to randomly move the mouse to a nearby position
def random_mouse_move():
    current_x, current_y = pyautogui.position()  # Get current mouse position
    new_x = current_x + random.randint(-100, 100)  # Move mouse within ±100 pixels
    new_y = current_y + random.randint(-100, 100)
    pyautogui.moveTo(new_x, new_y, duration=random.uniform(0.1, 0.5))  # Smooth move
    if random.random() < 0.3:  # 30% chance to click
        pyautogui.click()

# Function to simulate additional random activities
def simulate_extra_activity():
    # Open a random folder or file
    os.system("explorer .")  # Open current directory in Windows Explorer
    time.sleep(random.uniform(2, 5))
    
    # Random scrolling
    for _ in range(random.randint(3, 10)):
        pyautogui.scroll(random.randint(-300, 300))  # Scroll up or down
        time.sleep(random.uniform(1, 3))
    
    # Switching between applications (Alt+Tab)
    for _ in range(random.randint(2, 5)):
        pyautogui.keyDown("alt")
        pyautogui.press("tab")
        pyautogui.keyUp("alt")
        time.sleep(random.uniform(2, 5))

# Main function to run the typing and mouse simulation
def main():
    while True:
        for text in texts_to_type:
            # Move cursor to a random position on the screen before typing
            screen_width, screen_height = pyautogui.size()
            random_x = random.randint(0, screen_width)
            random_y = random.randint(0, screen_height)
            pyautogui.moveTo(random_x, random_y, duration=random.uniform(0.5, 1.5))
            pyautogui.click()  # Click before typing

            simulate_typing(text)  # Type the current text
            time.sleep(random.uniform(2, 5))  # Simulate a short break between texts

            # Simulate additional activities
            simulate_extra_activity()

# Entry point
if __name__ == "__main__":
    print("Starting human-like typing simulation with cursor movements. Focus on an input field.")
    time.sleep(5)  # Give the user time to focus on the desired input field
    main()
