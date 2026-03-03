---
title: "C++ keyword: and_eq"
source_path: "cpp/keyword/and_eq"
category: "keyword"
---

[alternative operators](/cpp/language/operator_alternative/): as an alternative for &=

## Example
```cpp
#include <bitset>
#include <iostream>
 
int main()
{
    std::bitset<4> mask("1100");
    std::bitset<4> val("0111");
    val and_eq mask;
    std::cout << val << '\n';
}
```

## See also
- [and](/cpp/keyword/and/)
- [bitand](/cpp/keyword/bitand/)
- [bitor](/cpp/keyword/bitor/)
- [not](/cpp/keyword/not/)
- [not_eq](/cpp/keyword/not_eq/)
- [or](/cpp/keyword/or/)
- [or_eq](/cpp/keyword/or_eq/)
- [xor](/cpp/keyword/xor/)
- [xor_eq](/cpp/keyword/xor_eq/)
