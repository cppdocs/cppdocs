---
title: "std::basic_ios<CharT,Traits>::imbue"
source_path: "cpp/io/basic_ios/imbue"
category: "io"
---

Replaces the current locale. Effectively calls ios_base::imbue(loc) and if there is an associated stream buffer (rdbuf() != 0), then calls rdbuf()->pubimbue(loc).

## Declarations
```cpp
std::locale imbue( const std::locale& loc );
```

## Parameters
- `loc`: the new locale

## Return value
The previous locale, as returned by ios_base::imbue(loc).

## Example
```cpp
#include <iostream>
#include <locale>
#include <sstream>
 
int main()
{
    std::istringstream iss;
    iss.imbue(std::locale("en_US.UTF8"));
 
    std::cout << "Current locale: " << iss.getloc().name() << '\n';
 
    iss.imbue(std::locale());
    std::cout << "Global locale : " << iss.getloc().name() << '\n';
}
```
