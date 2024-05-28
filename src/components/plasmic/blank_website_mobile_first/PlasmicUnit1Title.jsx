// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pgSfCFo9UF4777TfUQAq8w
// Component: fhmxFVFG9WOd
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
import sty from "./PlasmicUnit1Title.module.css"; // plasmic-import: fhmxFVFG9WOd/css

createPlasmicElementProxy;

export const PlasmicUnit1Title__VariantProps = new Array();

export const PlasmicUnit1Title__ArgProps = new Array();

const $$ = {};

function PlasmicUnit1Title__RenderFunc(props) {
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
    <p
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.p,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {"Unit 1"}
    </p>
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
          internalArgPropNames: PlasmicUnit1Title__ArgProps,
          internalVariantPropNames: PlasmicUnit1Title__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUnit1Title__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUnit1Title";
  } else {
    func.displayName = `PlasmicUnit1Title.${nodeName}`;
  }
  return func;
}

export const PlasmicUnit1Title = Object.assign(
  // Top-level PlasmicUnit1Title renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicUnit1Title
    internalVariantProps: PlasmicUnit1Title__VariantProps,
    internalArgProps: PlasmicUnit1Title__ArgProps
  }
);

export default PlasmicUnit1Title;
/* prettier-ignore-end */
