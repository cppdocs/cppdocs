---
title: "C++ keyword: or"
source_path: "cpp/keyword/or"
category: "keyword"
---

[alternative operators](/cpp/language/operator_alternative/): as an alternative for ||

## Example
```cpp
#include <iostream>
 
void show(bool z, const char* s, int n)
{
    const char* r{z ? " true  " : " false "};
    if (n == 0) std::cout << "┌────────────────┬─────────┐\n";
    if (n <= 2) std::cout << "│ "   <<s<<    " │ "<<r<<" │\n";
    if (n == 2) std::cout << "└────────────────┴─────────┘\n";
}
 
int main()
{
    show(false or false, "false or false", 0);
    show(false or true , "false or true ", 1);
    show(true  or false, "true  or false", 1);
    show(true  or true , "true  or true ", 2);
}
```

## See also
- [and](/cpp/keyword/and/)
- [and_eq](/cpp/keyword/and_eq/)
- [bitand](/cpp/keyword/bitand/)
- [bitor](/cpp/keyword/bitor/)
- [not](/cpp/keyword/not/)
- [not_eq](/cpp/keyword/not_eq/)
- [or_eq](/cpp/keyword/or_eq/)
- [xor](/cpp/keyword/xor/)
- [xor_eq](/cpp/keyword/xor_eq/)
