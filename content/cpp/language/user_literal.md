---
title: "User-defined literals (since C++11)"
source_path: "cpp/language/user_literal"
category: "language"
since: "C++11"
---

Allows integer, floating-point, character, and string literals to produce objects of user-defined type by defining a user-defined suffix.

## Notes
Since the introduction of user-defined literals, the code that uses [format macro constants for fixed-width integer types](/c/types/integer/) with no space after the preceding string literal became invalid: [std::printf](/cpp/io/c/fprintf/)("%"[PRId64](/cpp/types/integer/)"\n",[INT64_MIN](/cpp/types/integer/)); has to be replaced by [std::printf](/cpp/io/c/fprintf/)("%" [PRId64](/cpp/types/integer/)"\n",[INT64_MIN](/cpp/types/integer/));.

Due to [maximal munch](/cpp/language/translation_phases/#maximal_munch), user-defined integer and floating point literals ending in p, P,(since C++17) e and E, when followed by the operators + or -, must be separated from the operator with whitespace or parentheses in the source:

Same applies to dot operator following an integer or floating-point user-defined literal:

Otherwise, a single invalid preprocessing number token (e.g., 1.0_E+2.0 or 4s.count) is formed, which causes compilation to fail.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1473 | C++11 | whitespace between "" and ud-suffix wasrequired in the declaration of literal operators | made optional |
| CWG 1479 | C++11 | literal operators could have default arguments | prohibited |
| CWG 2521 | C++11 | operator"" _Bq was ill-formed (no diagnosticrequired) because it uses the reserved identifier _Bq | deprecated the literal operator syntaxwith whitespace between "" and ud-suffix |
