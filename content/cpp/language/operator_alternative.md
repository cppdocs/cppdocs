---
title: "Alternative operator representations"
source_path: "cpp/language/operator"
category: "language"
---

C++ (and C) source code may be written in any non-ASCII 7-bit character set that includes the [ISO 646:1983](https://en.wikipedia.org/wiki/ISO_646) invariant character set. However, several C++ operators and punctuators require characters that are outside of the ISO 646 codeset: {, }, [, ], #, \, ^, |, ~. To be able to use character encodings where some or all of these symbols do not exist (such as the German [DIN 66003](https://en.wikipedia.org/wiki/DIN_66003)), C++ defines the following alternatives composed of ISO 646 compatible characters.

## Notes
The characters & and ! are invariant under ISO-646, but alternatives are provided for the tokens that use these characters anyway to accommodate even more restrictive historical charsets.

There is no alternative spelling (such as eq) for the equality operator == because the character = was present in all supported charsets.

## Example
```cpp
%:include <iostream>
 
struct X
<%
    compl X() <%%> // destructor
    X() <%%>
    X(const X bitand) = delete; // copy constructor
    // X(X and) = delete; // move constructor
 
    bool operator not_eq(const X bitand other)
    <%
       return this not_eq bitand other;
    %>
%>;
 
int main(int argc, char* argv<::>) 
<%
    // lambda with reference-capture:
    auto greet = <:bitand:>(const char* name)
    <%
        std::cout << "Hello " << name
                  << " from " << argv<:0:> << '\n';
    %>;
 
    if (argc > 1 and argv<:1:> not_eq nullptr)
        greet(argv<:1:>);
    else
        greet("Anon");
%>
```

## See also
- [C documentation](/c/language/operator_alternative/)
