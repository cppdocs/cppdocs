---
title: "std::ispunct"
source_path: "cpp/string/byte/ispunct"
header: "<cctype>"
category: "string"
---

Checks if the given character is a punctuation character as classified by the current C locale. The default C locale classifies the characters (!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~) as punctuation.

## Declarations
```cpp
int ispunct( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is a punctuation character, zero otherwise.

## Notes
Like all other functions from [<cctype>](/cpp/header/cctype/), the behavior of std::ispunct is undefined if the argument's value is neither representable as unsigned char nor equal to [EOF](/cpp/io/c/). To use these functions safely with plain chars (or signed chars), the argument should first be converted to unsigned char:

Similarly, they should not be directly used with standard algorithms when the iterator's value type is char or signed char. Instead, convert the value to unsigned char first:

## Example
```cpp
#include <cctype>
#include <clocale>
#include <iostream>
 
int main()
{
    unsigned char c = '\xd7'; // the character × (multiplication sign) in ISO-8859-1
 
    std::cout << "ispunct(\'\\xd7\', default C locale) returned "
              << std::boolalpha << (bool)std::ispunct(c) << '\n';
 
    std::setlocale(LC_ALL, "en_GB.iso88591");
    std::cout << "ispunct(\'\\xd7\', ISO-8859-1 locale) returned "
              << std::boolalpha << (bool)std::ispunct(c) << '\n';
}
```

## See also
- [ispunct(std::locale)](/cpp/locale/ispunct/)
- [iswpunct](/cpp/string/wide/iswpunct/)
- [C documentation](/c/string/byte/ispunct/)
- [iscntrl](/cpp/string/byte/iscntrl/)
- [iswcntrl](/cpp/string/wide/iswcntrl/)
- [isprint](/cpp/string/byte/isprint/)
- [iswprint](/cpp/string/wide/iswprint/)
- [isspace](/cpp/string/byte/isspace/)
- [iswspace](/cpp/string/wide/iswspace/)
- [isblank](/cpp/string/byte/isblank/)
- [iswblank](/cpp/string/wide/iswblank/)
- [isgraph](/cpp/string/byte/isgraph/)
- [iswgraph](/cpp/string/wide/iswgraph/)
- [iswpunct](/cpp/string/wide/iswpunct/)
- [isalnum](/cpp/string/byte/isalnum/)
- [iswalnum](/cpp/string/wide/iswalnum/)
- [isalpha](/cpp/string/byte/isalpha/)
- [iswalpha](/cpp/string/wide/iswalpha/)
- [isupper](/cpp/string/byte/isupper/)
- [iswupper](/cpp/string/wide/iswupper/)
- [islower](/cpp/string/byte/islower/)
- [iswlower](/cpp/string/wide/iswlower/)
- [isdigit](/cpp/string/byte/isdigit/)
- [iswdigit](/cpp/string/wide/iswdigit/)
- [isxdigit](/cpp/string/byte/isxdigit/)
- [iswxdigit](/cpp/string/wide/iswxdigit/)
