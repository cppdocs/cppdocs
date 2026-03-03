---
title: "std::fpos<State>::state"
source_path: "cpp/io/fpos/state"
category: "io"
---

Manages the file position state.

## Declarations
```cpp
State state() const;
```

```cpp
void state( State st );
```

## Parameters
- `st`: new value for the state

## Example
```cpp
#include <cwchar>
#include <iostream>
#include <sstream>
 
int main()
{
    std::istringstream s("test");
    std::mbstate_t st = s.tellg().state();
 
    if (std::mbsinit(&st))
        std::cout << "The stream is in the initial shift state\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 441 | C++98 | overload (1) was not declared const (it is const in the synopsis) | added const |

## See also
- [mbstate_t](/cpp/string/multibyte/mbstate_t/)
