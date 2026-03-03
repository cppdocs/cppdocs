---
title: "std::unstoppable_token"
source_path: "cpp/thread/unstoppable_token"
header: "<stop_token>"
category: "thread"
since: "C++26"
---

The concept unstoppable_token<Token> specifies an additional requirement for a [stoppable_token](/cpp/thread/stoppable_token/) where the type does not allow stopping. That is, the expression tok.stop_possible() must be usable in constant expression and returns false.

## Declarations
```cpp
template< class Token >
concept unstoppable_token =
std::stoppable_token<Token> &&
requires (const Token tok) {
requires std::bool_constant<(!tok.stop_possible())>::value;
};
```
_(since C++26)_
