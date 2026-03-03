---
title: "C++ keyword: not_eq"
source_path: "cpp/keyword/not_eq"
category: "keyword"
---

[alternative operators](/cpp/language/operator_alternative/): as an alternative for !=

## Example
```cpp
#include <iostream>
 
void show(bool z, const char* s, int n)
{
    const char* r { z ? " true  " : " false " };
    if (n == 0) std::cout << "┌────────────────────┬─────────┐\n";
    if (n <= 2) std::cout << "│ "      <<s<<     " │ "<<r<<" │\n";
    if (n == 2) std::cout << "└────────────────────┴─────────┘\n";
}
 
int main()
{
    show(false not_eq false, "false not_eq false", 0);
    show(false not_eq true , "false not_eq true ", 1);
    show(true  not_eq false, "true  not_eq false", 1);
    show(true  not_eq true , "true  not_eq true ", 2);
}
```

## See also
- [and](/cpp/keyword/and/)
- [and_eq](/cpp/keyword/and_eq/)
- [bitand](/cpp/keyword/bitand/)
- [bitor](/cpp/keyword/bitor/)
- [not](/cpp/keyword/not/)
- [or](/cpp/keyword/or/)
- [or_eq](/cpp/keyword/or_eq/)
- [xor](/cpp/keyword/xor/)
- [xor_eq](/cpp/keyword/xor_eq/)
