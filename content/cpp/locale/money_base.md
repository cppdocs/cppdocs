---
title: "std::money_base"
source_path: "cpp/locale/money_base"
header: "<locale>"
category: "locale"
---

The class std::money_base provides constants which are inherited and used by the [std::moneypunct](/cpp/locale/moneypunct/), [std::money_get](/cpp/locale/money_get/) and [std::money_put](/cpp/locale/money_put/) facets.

## Declarations
```cpp
class money_base;
```

## Notes
The monetary format is an array of four chars convertible to std::money_base::part. In that sequence, each of symbol, sign, and value appears exactly once, and either space or none appears in the remaining position. The value none, if present, is not first; the value space, if present, is neither first nor last.

The default format, returned by the standard specializations of [std::moneypunct](/cpp/locale/moneypunct/) is {symbol, sign, none, value}.

## See also
- [moneypunct](/cpp/locale/moneypunct/)
- [std::money_get](/cpp/locale/money_get/)
- [std::money_put](/cpp/locale/money_put/)
- [money_get](/cpp/locale/money_get/)
- [money_put](/cpp/locale/money_put/)
