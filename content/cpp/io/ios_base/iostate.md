---
title: "std::ios_base::iostate"
source_path: "cpp/io/ios_base/iostate"
category: "io"
---

Specifies stream state flags. It is a [BitmaskType](/cpp/named_req/bitmasktype/), the following constants are defined:

## Declarations
```cpp
typedef /*implementation defined*/ iostate;
```

```cpp
static constexpr iostate goodbit = 0;
```

```cpp
static constexpr iostate badbit = /* implementation defined */
static constexpr iostate failbit = /* implementation defined */
static constexpr iostate eofbit = /* implementation defined */
```

## Example
This section is incompleteReason: no example

## See also
- [basic_ios](/cpp/io/basic_ios/)
- [good()](/cpp/io/basic_ios/good/)
- [fail()](/cpp/io/basic_ios/fail/)
- [good()](/cpp/io/basic_ios/good/)
- [fail()](/cpp/io/basic_ios/fail/)
- [bad()](/cpp/io/basic_ios/bad/)
- [eof()](/cpp/io/basic_ios/eof/)
- [operator bool](/cpp/io/basic_ios/operator_bool/)
- [operator!](/cpp/io/basic_ios/operator_bool/)
- [rdstate](/cpp/io/basic_ios/rdstate/)
- [setstate](/cpp/io/basic_ios/setstate/)
- [clear](/cpp/io/basic_ios/clear/)
