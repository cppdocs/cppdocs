---
title: "Standard library header <ciso646> (until C++20), <iso646.h>"
source_path: "cpp/header/ciso646"
category: "header"
---

This header was originally in the C standard library as [<iso646.h>](/c/language/operator_alternative/).

## Notes
In old or nonconforming compilers, using the [alternative operator representations](/cpp/language/operator_alternative/) may still require including this header.

<ciso646> is removed in C++20. Corresponding <iso646.h> is still available in C++20.

Prior to C++20, including <ciso646> was sometimes used as a technique for obtaining definitions of implementation-specific library version macros without causing other effects.
As of C++20, the header [<version>](/cpp/header/version/) was added for this purpose.

Possible output:
