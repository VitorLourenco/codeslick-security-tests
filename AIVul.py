# Example 1: JavaScript methods in Python (CRITICAL - hallucinations)
def process_items():
    items = [1, 2, 3]
    items.push(4)  # Hallucination: JavaScript method
    return items

# Example 2: String case methods (CRITICAL - hallucinations)
def format_text(text):
    upper = text.toUpperCase()  # Hallucination: JavaScript method
    lower = text.toLowerCase()  # Hallucination: JavaScript method
    return upper, lower

# Example 3: Property vs method confusion (CRITICAL - hallucinations)
def check_length(data):
    if data.length > 10:  # Hallucination: JavaScript property
        return True
    return False

# Example 4: Dict methods (CRITICAL - hallucinations)
def check_dict(user_data):
    if user_data.hasKey("email"):  # Hallucination: JavaScript/Java method
        return user_data["email"]
    return None

# Example 5: String indexing (CRITICAL - hallucinations)
def get_char(text, index):
    char = text.charAt(index)  # Hallucination: JavaScript method
    return char

# Example 6: String search (CRITICAL - hallucinations)
def find_word(text, word):
    pos = text.indexOf(word)  # Hallucination: JavaScript method
    return pos

# Example 7: String slicing (CRITICAL - hallucinations)
def get_substring(text, start, end):
    result = text.substring(start, end)  # Hallucination: JavaScript method
    return result

# Example 8: List methods (CRITICAL - hallucinations)
def remove_item(items, index):
    items.remove_at(index)  # Hallucination: non-existent method
    return items
