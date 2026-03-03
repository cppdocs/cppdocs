---
title: "Filename and line information"
source_path: "cpp/preprocessor/line"
category: "preprocessor"
---

Changes the source code's line number and, optionally, the current file name, in the preprocessor.

## Notes
This directive is used by some automatic code generation tools which produce C++ source files from a file written in another language. In that case, #line directives may be inserted in the generated C++ file referencing line numbers and the file name of the original (human-editable) source file.

## Example
```cpp
#include <cassert>
#define FNAME "test.cc"
int main()
{
#line 777 FNAME
        assert(2+2 == 5);
}
```

## See also
- [source_location](/cpp/utility/source_location/)
- [C documentation](/c/preprocessor/line/)
