---
title: "std::text_encoding::literal"
source_path: "cpp/text/text_encoding/literal"
category: "text"
since: "C++26"
---

Constructs a new text_encoding object representing the [ordinary character literal encoding](/cpp/language/charset/#Code_unit_and_literal_encoding). It is used to determine the character encoding applied to ordinary character or string literals (e.g. "This is literal").

## Declarations
```cpp
static consteval text_encoding literal() noexcept;
```
_(since C++26)_

## Return value
The object holding the representation of the ordinary literal encoding.

## Notes
This function can be implemented by constructing text_encoding with compiler-specific builtin macros such as [__clang_literal_encoding__](https://clang.llvm.org/docs/LanguageExtensions.html#builtin-macros) from Clang, or [__GNUC_EXECUTION_CHARSET_NAME](https://gcc.gnu.org/onlinedocs/cpp/Common-Predefined-Macros.html) from GCC. These macros, which are known at compile-time, expand to a narrow string literal containing the name of the narrow execution character set used (ordinary literal encoding).

The value returned by literal() may depend on compiler options such as -fexec-charset=encoding-name in GCC or Clang or /execution-charset:encoding-name in MSVC.

## Example
```cpp
#include <text_encoding>
 
static_assert(std::text_encoding::literal() == std::text_encoding::UTF8);
 
int main()
{
    // if the literal encoding is UTF-8, then this unprefixed string literal is
    // encoded as UTF-8
    constexpr char green_heart[] = "\N{GREEN HEART}";
 
    // this prefixed string literal is always encoded as UTF-8 regardless of the
    // literal encoding
    constexpr char8_t green_heart_u8[] = u8"\N{GREEN HEART}";
}
```
