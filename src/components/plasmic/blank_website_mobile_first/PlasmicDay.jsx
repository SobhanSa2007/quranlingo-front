// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pgSfCFo9UF4777TfUQAq8w
// Component: 6pws9FrBaH0B
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: pgSfCFo9UF4777TfUQAq8w/projectcss
import sty from "./PlasmicDay.module.css"; // plasmic-import: 6pws9FrBaH0B/css

createPlasmicElementProxy;

export const PlasmicDay__VariantProps = new Array();

export const PlasmicDay__ArgProps = new Array();

const $$ = {};

function PlasmicDay__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {"Day"}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDay__ArgProps,
          internalVariantPropNames: PlasmicDay__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDay";
  } else {
    func.displayName = `PlasmicDay.${nodeName}`;
  }
  return func;
}

export const PlasmicDay = Object.assign(
  // Top-level PlasmicDay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicDay
    internalVariantProps: PlasmicDay__VariantProps,
    internalArgProps: PlasmicDay__ArgProps
  }
);

export default PlasmicDay;
/* prettier-ignore-end */