---
title: "Comments"
source_path: "cpp/comments"
category: "comments"
---

Comments serve as a sort of in-code documentation. When inserted into a program, they are effectively ignored by the compiler; they are solely intended to be used as notes by the humans that read source code. Although specific documentation is not part of the C++ standard, several utilities exist that parse comments with different documentation formats.

## Notes
Because comments [are removed](/cpp/language/translation_phases/#Phase_3) before the preprocessor stage, a macro cannot be used to form a comment and an unterminated C-style comment doesn't spill over from an #include'd file.

Besides commenting out, other mechanisms used for source code exclusion are

and

## Example
```cpp
#include <iostream>
 
/* C-style comments can contain
multiple lines */
/* or just one */
 
/**************
 *  you can insert any *, but
 *  you can't make comments nested
 */
 
// C++-style comments can comment one line
 
// or, they can
// be strung together
 
int main()
{
    // comments are removed before preprocessing,
    // so ABC is "1", not "1//2134", and "1 hello world"
    // will be printed
#define ABC 1//2134
    std::cout << ABC << " hello world\n";
 
    // The below code won't be run
    // return 1;
 
    // The below code will be run
    return 0;
}
```

## See also
- [C documentation](/c/comment/)
