---
title: "Filename and line information"
source_path: "c/preprocessor/line"
category: "c"
---

Changes the current line number and file name in the preprocessor.

## Notes
This directive is used by some automatic code generation tools which produce C source files from a file written in another language. In that case, #line directives may be inserted in the generated C file referencing line numbers and the file name of the original (human-editable) source file.

The line number following the directive #line __LINE__ is unspecified (there are two possible values that __LINE__ can expand to in this case: number of endlines seen so far, or number of endlines seen so far plus the endline that ends the #line directive). This is the result of [DR 464](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n2257.htm#dr_464), which applies retroactively.

## Example
```cpp
#include <assert.h>
#define FNAME "test.c"
int main(void)
{
#line 777 FNAME
        assert(2+2 == 5);
}
```

## See also
- [C++ documentation](/cpp/preprocessor/line/)
