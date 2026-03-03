---
title: "std::basic_streambuf<CharT,Traits>::uflow"
source_path: "cpp/io/basic_streambuf/uflow"
category: "io"
---

Ensures that at least one character is available in the input area by updating the pointers to the input area (if needed). On success returns the value of that character and advances the value of the get pointer by one character. On failure returns traits::eof().

## Declarations
```cpp
protected:
virtual int_type uflow();
```

## Return value
The value of the character that was pointed to by the get pointer before it was advanced by one, or traits::eof() otherwise.

## Example
This section is incompleteReason: no example

## See also
- [underflow](/cpp/io/basic_streambuf/underflow/)
- [overflow](/cpp/io/basic_streambuf/overflow/)
