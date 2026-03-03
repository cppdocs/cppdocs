---
title: "std::text_encoding"
source_path: "cpp/locale/text_encoding"
header: "<text_encoding>"
category: "locale"
since: "C++26"
---

The class text_encoding provides a mechanism for identifying character encodings. It is used to determine the [ordinary character literal encoding](/cpp/language/charset/#Code_unit_and_literal_encoding) of the translation environment at compile-time and the character encoding of the execution environment at runtime.

## Declarations
```cpp
struct text_encoding;
```
_(since C++26)_

## Notes
When working with character encodings, it is important to note that the primary names or aliases of two distinct registered character encodings are not equivalent when compared using [Charset Alias Matching](https://www.unicode.org/reports/tr22/tr22-8.html#Charset_Alias_Matching) as described by the Unicode Technical Standard.

For convenience, the enumerators of text_encoding::id are introduced as members of text_encoding and can be accessed directly. This means that text_encoding::ASCII and text_encoding::id::ASCII refer to the same entity.

It is recommended that the implementation should treat registered encodings as not interchangeable.
Additionally, the primary name of a registered encoding should not be used to describe a similar but different non-registered encoding, unless there is a clear precedent for doing so.

## Example
```cpp
#include <locale>
#include <print>
#include <text_encoding>
 
int main()
{
    // literal encoding is known at compile-time
    constexpr std::text_encoding literal_encoding = std::text_encoding::literal();
 
    // check for literal encoding
    static_assert(literal_encoding.mib() != std::text_encoding::other &&
                  literal_encoding.mib() != std::text_encoding::unknown);
 
    // environment encoding is only known at runtime
    std::text_encoding env_encoding = std::text_encoding::environment();
 
    // associated encoding of the default locale
    std::text_encoding locale_encoding = std::locale("").encoding();
 
    std::println("The literal encoding is {}", literal_encoding.name());
    std::println("The aliases of literal encoding:");
    for (const char* alias_name : literal_encoding.aliases())
        std::println(" -> {}", alias_name);
 
    if (env_encoding == locale_encoding)
        std::println("Both environment and locale encodings are the same");
 
    std::println("The environment encoding is {}", env_encoding.name());
    std::println("The aliases of environment encoding:");
    for (const char* alias_name : env_encoding.aliases())
        std::println(" -> {}", alias_name);
}
```

## See also
- [locale](/cpp/locale/locale/)
