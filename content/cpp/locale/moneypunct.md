---
title: "std::moneypunct"
source_path: "cpp/locale/moneypunct"
header: "<locale>"
category: "locale"
---

The facet std::moneypunct encapsulates monetary value format preferences. Stream I/O manipulators [std::get_money](/cpp/io/manip/get_money/) and [std::put_money](/cpp/io/manip/put_money/) use std::moneypunct through [std::money_get](/cpp/locale/money_get/) and [std::money_put](/cpp/locale/money_put/) for parsing monetary value input and formatting monetary value output.

## Declarations
```cpp
template< class CharT, bool International = false >
class moneypunct;
```

## See also
- [money_base](/cpp/locale/money_base/)
- [moneypunct_byname](/cpp/locale/moneypunct_byname/)
- [money_get](/cpp/locale/money_get/)
- [money_put](/cpp/locale/money_put/)
