---
title: "std::messages<CharT>::close, std::messages<CharT>::do_close"
source_path: "cpp/locale/messages/close"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_close of the most derived class.

## Declarations
```cpp
public:
void close( catalog c ) const;
```

```cpp
protected:
virtual void do_close( catalog c ) const;
```

## Parameters
- `c`: a valid open catalog identifier, on which close() has not yet been called

## Return value
(none)

## Notes
On POSIX systems, this function call usually translates to a call to [catclose()](https://pubs.opengroup.org/onlinepubs/9699919799/functions/catclose.html). In GNU libstdc++, which is implemented in terms of GNU gettext(), it does nothing.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    std::locale loc("de_DE.utf8");
    std::cout.imbue(loc);
    auto& facet = std::use_facet<std::messages<char>>(loc);
    auto cat = facet.open("sed", loc);
    if (cat < 0)
        std::cout << "Could not open german \"sed\" message catalog\n";
    else
        std::cout << "\"No match\" in German: "
                  << facet.get(cat, 0, 0, "No match") << '\n'
                  << "\"Memory exhausted\" in German: "
                  << facet.get(cat, 0, 0, "Memory exhausted") << '\n';
    facet.close(cat);
}
```
