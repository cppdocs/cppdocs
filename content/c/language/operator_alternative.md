---
title: "Alternative operators and tokens"
source_path: "c/language/operator_alternative"
category: "c"
---

C source code may be written in any 8-bit character set that includes the [ISO 646:1983](https://en.wikipedia.org/wiki/ISO_646) invariant character set, even non-ASCII ones. However, several C operators and punctuators require characters that are outside of the ISO 646 codeset: {, }, [, ], #, \, ^, |, ~. To be able to use character encodings where some or all of these symbols do not exist (such as the German [DIN 66003](https://en.wikipedia.org/wiki/DIN_66003)), there are two possibilities: alternative spellings of operators that use these characters or special combinations of two or three ISO 646 compatible characters that are interpreted as if they were a single non-ISO 646 character.

## Example
```cpp
%:include <stdio.h>
%:include <stdlib.h>
??=include <iso646.h>
 
int main(int argc, char** argv)
??<
    if (argc > 1 and argv<:1:> not_eq NULL)
    <%
       printf("Hello %s??/n", argv<:1:>);
    %>
    else
    <%
       printf("Hello %s??/n", argc? argv??(42??'42??) : __FILE__);
    %>
 
    return EXIT_SUCCESS;
??>
```

## See also
- [C++ documentation](/cpp/language/operator_alternative/)
