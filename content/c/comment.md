---
title: "Comments"
source_path: "c/comment"
category: "c"
---

Comments serve as a sort of in-code documentation. When inserted into a program, they are effectively ignored by the compiler; they are solely intended to be used as notes by the humans that read source code.

## Notes
Because comments [are removed](/c/language/translation_phases/) before the preprocessor stage, a macro cannot be used to form a comment and an unterminated C-style comment doesn't spill over from an #include'd file.

Besides commenting out, other mechanisms used for source code exclusion are:

and

The introduction of // comments in C99 was a breaking change in some rare circumstances:

## Example
```cpp
#include <stdio.h>
/*
C-style comments can contain
multiple lines.
*/
 
/* Or, just one line. */
 
// C++-style comments can comment one line.
 
// Or, they can
// be strung together.
 
int main(void)
{
  // The below code won't be run
  // puts("Hello");
 
  // The below code will be run
  puts("World");
 
  // A note regarding backslash + newline.
  // Despite belonging to translation phase 2 (vs phase 3 for comments),
  // '\' still determines which portion of the source code is considered
  // as 'comments':
  // This comment will be promoted to the next line \
  puts("Won't be run"); // may issue a warning "multi-line comment"
  puts("Hello, again");
}
```

## See also
- [C++ documentation](/cpp/comments/)
