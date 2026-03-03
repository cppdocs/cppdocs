---
title: "C++ keyword: not"
source_path: "cpp/keyword/not"
category: "keyword"
---

[alternative operators](/cpp/language/operator_alternative/): as an alternative for !

## Example
```cpp
#include <iostream>
 
void show(bool z, const char* s, int n)
{
    const char* r{z ? " true  " : " false "};
    if (n == 0) std::cout << "┌───────────┬─────────┐\n";
    if (n <= 1) std::cout << "│ " <<s<< " │ "<<r<<" │\n";
    if (n == 1) std::cout << "└───────────┴─────────┘\n";
}
 
int main()
{
    show(not true , "not true ", 0);
    show(not false, "not false", 1);
}
```

## See also
- [and](/cpp/keyword/and/)
- [and_eq](/cpp/keyword/and_eq/)
- [bitand](/cpp/keyword/bitand/)
- [bitor](/cpp/keyword/bitor/)
- [not_eq](/cpp/keyword/not_eq/)
- [or](/cpp/keyword/or/)
- [or_eq](/cpp/keyword/or_eq/)
- [xor](/cpp/keyword/xor/)
- [xor_eq](/cpp/keyword/xor_eq/)
