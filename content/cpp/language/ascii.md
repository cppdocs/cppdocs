---
title: "ASCII Chart"
source_path: "cpp/language/ascii"
category: "language"
---

The following chart contains all 128 ASCII decimal (dec), octal (oct), hexadecimal (hex) and character (ch) codes.

## Example
```cpp
#include <iostream>
 
int main()
{
    std::cout << "Printable ASCII [32..126]:\n";
    for (char c{' '}; c <= '~'; ++c)
        std::cout << c << ((c + 1) % 32 ? ' ' : '\n');
    std::cout << '\n';
}
```

## See also
- [C documentation](/c/language/ascii/)
