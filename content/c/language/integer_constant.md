---
title: "Integer constant"
source_path: "c/language/integer_constant"
category: "c"
---

Allows values of integer type to be used in expressions directly.

## Notes
Letters in the integer constants are case-insensitive: 0xDeAdBaBeU and 0XdeadBABEu represent the same number(one exception is the long-long-suffix, which is either ll or LL, never lL or Ll)(since C99).

There are no negative integer constants. Expressions such as -1 apply the [unary minus operator](/c/language/operator_arithmetic/) to the value represented by the constant.

When used in a controlling expression of [#if](/c/preprocessor/conditional/) or [#elif](/c/preprocessor/conditional/), all signed integer constants act as if they have type [intmax_t](/c/types/integer/) and all unsigned integer constants act as if they have type [uintmax_t](/c/types/integer/).

Integer constants may be used in [integer constant expressions](/c/language/constant_expression/).

Due to [maximal munch](/c/language/translation_phases/#maximal_munch), hexadecimal integer constants ending in e and E, when followed by the operators + or -, must be separated from the operator with whitespace or parentheses in the source:

Otherwise, a single invalid preprocessing number token is formed, which causes further analysis to fail.

## Example
```cpp
#include <inttypes.h>
#include <stdio.h>
 
int main(void)
{
    printf("123 = %d\n", 123);
    printf("0123 = %d\n", 0123);
    printf("0x123 = %d\n", 0x123);
    printf("12345678901234567890ull = %llu\n", 12345678901234567890ull);
    // the type is a 64-bit type (unsigned long long or possibly unsigned long)
    // even without a long suffix
    printf("12345678901234567890u = %"PRIu64"\n", 12345678901234567890u );
 
    // printf("%lld\n", -9223372036854775808); // Error:
        // the value 9223372036854775808 cannot fit in signed long long, which
        // is the biggest type allowed for unsuffixed decimal integer constant
 
    printf("%llu\n", -9223372036854775808ull );
    // unary minus applied to unsigned value subtracts it from 2^64,
    // this gives unsigned 9223372036854775808
 
    printf("%lld\n", -9223372036854775807ll - 1);
    // correct way to form signed value -9223372036854775808
}
```

## See also
- [C++ documentation](/cpp/language/integer_literal/)
