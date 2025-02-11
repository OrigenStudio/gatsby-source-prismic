import test from "ava";
import * as sinon from "sinon";
import * as gatsby from "gatsby";

import { createGatsbyContext } from "./__testutils__/createGatsbyContext";
import { createMockCustomTypeModelWithFields } from "./__testutils__/createMockCustomTypeModelWithFields";
import { createPluginOptions } from "./__testutils__/createPluginOptions";

import { createSchemaCustomization } from "../src/gatsby-node";

const noop = () => void 0;

test("uses JSON type", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	const customTypeModel = createMockCustomTypeModelWithFields(t, {
		unknown: {
			// @ts-expect-error - We purposely want to use a type outside the known types.
			type: "unknown",
		},
	});
	customTypeModel.id = "foo";

	pluginOptions.customTypeModels = [customTypeModel];

	await createSchemaCustomization(
		gatsbyContext as gatsby.CreateSchemaCustomizationArgs,
		pluginOptions,
		noop,
	);

	t.true(
		(gatsbyContext.actions.createTypes as sinon.SinonStub).calledWith({
			kind: "OBJECT",
			config: sinon.match({
				name: "PrismicPrefixFooDataType",
				fields: {
					unknown: sinon.match({
						type: "JSON",
						resolve: sinon.match.func,
					}),
				},
			}),
		}),
	);
});

test("prints message about unknown type", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	const customTypeModel = createMockCustomTypeModelWithFields(t, {
		unknown: {
			// @ts-expect-error - We purposely want to use a type outside the known types.
			type: "unknown",
		},
	});
	customTypeModel.id = "foo";

	pluginOptions.customTypeModels = [customTypeModel];

	await createSchemaCustomization(
		gatsbyContext as gatsby.CreateSchemaCustomizationArgs,
		pluginOptions,
		noop,
	);

	t.true(
		(gatsbyContext.reporter.info as sinon.SinonStub).calledWith(
			sinon.match(/unknown field type/i),
		),
	);
});
