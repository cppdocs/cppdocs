---
title: "std::stoppable_token"
source_path: "cpp/thread/stoppable_token"
header: "<stop_token>"
category: "thread"
since: "C++26"
---

The concept stoppable_token<Token> specifies the basic interface of a stop token that is [copyable](/cpp/concepts/copyable/) and [equality_comparable](/cpp/concepts/equality_comparable/) and allows polling to see if the stop request is possible and whether the request has been made.

## Declarations
```cpp
template< class Token >
concept stoppable_token =
requires (const Token tok) {
typename /*check-type-alias-exists*/<Token::template callback_type>;
{ tok.stop_requested() } noexcept -> std::same_as<bool>;
{ tok.stop_possible() } noexcept -> std::same_as<bool>;
{ Token(tok) } noexcept; // see implicit expression variations
} &&
std::copyable<Token> &&
std::equality_comparable<Token>;
```
_(since C++26)_

```cpp
Helper templates
```

```cpp
template< template<class> class >
struct /*check-type-alias-exists*/; // not defined
```
_(exposition only*)_

## See also
- [unstoppable_token](/cpp/thread/unstoppable_token/)
