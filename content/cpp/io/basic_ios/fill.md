---
title: "std::basic_ios<CharT,Traits>::fill"
source_path: "cpp/io/basic_ios/fill"
category: "io"
---

Manages the fill character used to pad the output conversions to the specified field width.

## Declarations
```cpp
CharT fill() const;
```

```cpp
CharT fill( CharT ch );
```

## Parameters
- `ch`: the character to use as fill character

## Return value
The fill character before the call to the function.

## Example
```cpp
#include <iomanip>
#include <iostream>
 
int main ()
{
    std::cout << "With default setting : [" << std::setw(10) << 40 << "]\n";
    char prev = std::cout.fill('x');
    std::cout << "Replaced '" << prev << "' with '"
              << std::cout.fill() << "': [" << std::setw(10) << 40 << "]\n";
}
```

## See also
- [setfill](/cpp/io/manip/setfill/)
